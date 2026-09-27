export const name="person_shield";
export const id="dl_f7764f690202fad20131";
export const url=new URL("../icons/person_shield.svg?v=6760548fb0d1490abe723c02291fb956167ce4db4bb4d112dcdfd36fb14f74ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
