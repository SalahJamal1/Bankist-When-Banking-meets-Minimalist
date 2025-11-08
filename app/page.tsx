import Footer from './_components/Footer';
import Header from './_components/Header';
import Modal from './_components/Modal';
import Features from './_components/Features';
import Operations from './_components/Operations';
import Reviewers from './_components/Reviewers';
import SignUp from './_components/SignUp';

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Operations />
      <Reviewers />
      <SignUp />
      <Footer />
      <Modal />
    </>
  );
}
