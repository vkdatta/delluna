export const name="person-simple-run-duotone";
export const id="dl_9be83f8844644a9fb176";
export const url=new URL("../icons/person-simple-run-duotone.svg?v=b14afd7b024b5a1cfc142aa9a2506bcc1a6e3f47dc328077bbad2172bb825041",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
