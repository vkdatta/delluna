export const name="stripe-logo-thin";
export const id="dl_f18e399d34334aceb44b";
export const url=new URL("../icons/S/stripe-logo-thin.svg?v=51f7d0dc703e8c7e34ac44faac1b7ebd48bd7538bc31e1d831d536c2dc84cbcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
