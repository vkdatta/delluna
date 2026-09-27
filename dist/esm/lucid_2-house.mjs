export const name="lucid_2-house";
export const id="dl_70db9e6c62604a458953";
export const url=new URL("../icons/lucid_2-house.svg?v=7526ce0a2fbf26b471a65c2e8df036a997e4008f2ad4fa32bc2c88b71855a1cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
