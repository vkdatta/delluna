export const name="lighthouse-light";
export const id="dl_9a91adc80d0e471b89bb";
export const url=new URL("../icons/lighthouse-light.svg?v=91aba636e423c41f0b2d43eb3cbdb8be895855117e29477c1bb0f1775a4fcc1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
