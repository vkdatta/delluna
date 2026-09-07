export const name="wave-sawtooth";
export const id="dl_61ead17e5fdb470eb5ab";
export const url=new URL("../icons/W/wave-sawtooth.svg?v=bfb26a22b082fe98e61b74e5e3eb659da777f590873c6f61c69e046b9c5df0d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
