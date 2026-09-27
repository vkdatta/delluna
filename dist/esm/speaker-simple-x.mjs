export const name="speaker-simple-x";
export const id="dl_b907eece64a42ab1bc47";
export const url=new URL("../icons/speaker-simple-x.svg?v=a0a8e9c31f0325cc0e0fd30da57f3718830fe19a9dd3f0a5e8b2bdd7bd0b45df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
