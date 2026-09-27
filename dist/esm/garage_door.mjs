export const name="garage_door";
export const id="dl_932206d0cc97fd6b0abf";
export const url=new URL("../icons/garage_door.svg?v=b4e6e1637ce5dfb452b01278a5e124b6e5b6e3e3ec80fd53c82cd18f7c73cd3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
