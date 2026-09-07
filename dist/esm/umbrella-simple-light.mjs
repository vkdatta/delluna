export const name="umbrella-simple-light";
export const id="dl_bd9bcefb5ac14f039af7";
export const url=new URL("../icons/U/umbrella-simple-light.svg?v=8a5aed87d94658b64960525260a7dac02ab3aebb8828fba93b3a0bdc37356bfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
