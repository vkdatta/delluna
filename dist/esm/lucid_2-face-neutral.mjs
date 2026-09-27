export const name="lucid_2-face-neutral";
export const id="dl_2d0b6b9800434e7a8f5b";
export const url=new URL("../icons/lucid_2-face-neutral.svg?v=22803eb2c77a9c92a2c5478329ed2811ca5625ea16c44ce14640fba4029f9a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
