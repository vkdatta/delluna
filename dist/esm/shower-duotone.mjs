export const name="shower-duotone";
export const id="dl_1037e486d67c4263869d";
export const url=new URL("../icons/S/shower-duotone.svg?v=3a51dc10c5ec4cf6eef586c2100ad1afec11dcdce962e0827ff345d294c3eee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
