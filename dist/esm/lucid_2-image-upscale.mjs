export const name="lucid_2-image-upscale";
export const id="dl_9b1d652745de496eb1a6";
export const url=new URL("../icons/lucid_2-image-upscale.svg?v=5cb186b88eec8833d9c28d294ff065f4c8302185e35740ffdf949db833f4208f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
