'use client';
import TrainerCard from '@/components/TrainerCard';
import Pokedex from '@/components/Pokedex';
import ContactForm from '@/components/ContactForm';
import PokeHeader from '@/components/PokeHeader';


export default function Page() {
  return (
  <main>
    <PokeHeader />
    <TrainerCard />
    <Pokedex />
    <ContactForm />
  </main>
  );
}