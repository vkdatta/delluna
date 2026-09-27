export const name="tote-simple";
export const id="dl_1f34f2bcc0bd533cbe7d";
export const url=new URL("../icons/tote-simple.svg?v=94705005196967c8fa4440f6ee42610b32672e067c42abb5b4eca374d59687ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
