export const name="hard-hat-light";
export const id="dl_f4d17bc7035e4a1f80a8";
export const url=new URL("../icons/hard-hat-light.svg?v=d196154f86e2d9d57bc558154e282adcf5dafcf9fc1624e13ae8f19042c23625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
