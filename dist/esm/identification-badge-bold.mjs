export const name="identification-badge-bold";
export const id="dl_5afaa755a4224d60a19a";
export const url=new URL("../icons/identification-badge-bold.svg?v=1cccd5a0837282198aa0dc3e4022713c0b5e5d5dfb646bb14994401446201b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
