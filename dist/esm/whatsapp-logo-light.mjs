export const name="whatsapp-logo-light";
export const id="dl_eaa431987e79c1b016e6";
export const url=new URL("../icons/whatsapp-logo-light.svg?v=46b3dc95405fdfafae99af47a1f67d9f766584ef693f983100a0cd80c2f3e54f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
