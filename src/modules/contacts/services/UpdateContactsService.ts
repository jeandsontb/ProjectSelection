import MessageError from '@shared/errors/MessageError';
import { getCustomRepository } from 'typeorm';
import Contact from '../typeorm/entities/Contact';
import { ContactRepository } from '../typeorm/repositories/ContactsRepository';

interface IContactRequest {
  id: number;
  name: string;
  lastname: string;
  phone: string;
  birth: string;
  address: string;
  email: string;
}

class UpdateContactsService {
  public async execute(data: IContactRequest): Promise<Contact> {
    const contactsRepository = getCustomRepository(ContactRepository);

    const contact = await contactsRepository.findOne(data.id);

    if (!contact) {
      throw new MessageError('Contato não encontrado!');
    }

    //verifica e certifica que apenas um email pode ser colocado no sistema
    const contactExists = await contactsRepository.findByName(data.email);

    if (contactExists?.id !== data.id) {
      throw new MessageError('Já existe um contato com esse e-mail na base.');
    }

    contact.name = data.name;
    contact.lastname = data.lastname;
    contact.phone = data.phone;
    contact.birth = data.birth;
    contact.address = data.address;
    contact.email = data.email;

    await contactsRepository.save(contact);

    return contact;
  }
}

export default UpdateContactsService;
