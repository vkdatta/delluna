export const name="computer_sound";
export const id="dl_ad2873ec26c8c14400bf";
export const url=new URL("../icons/computer_sound.svg?v=aaf44e2ee148a9d9297040077ff9d5056d94e30c8e40b82f219032636fda9ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
