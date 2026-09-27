export const name="person-simple-swim-light";
export const id="dl_ff0df21bb7d5410e9940";
export const url=new URL("../icons/person-simple-swim-light.svg?v=316a739b60977fadfdce974f84765f6cc10f8a8b611d6cf1b10aead855b68940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
