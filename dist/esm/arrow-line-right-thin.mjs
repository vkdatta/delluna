export const name="arrow-line-right-thin";
export const id="dl_cb22d40c809e4be3a356";
export const url=new URL("../icons/arrow-line-right-thin.svg?v=2aec6396801f688beff9c5ddad1f1958f2f1cffcda39c1f0f485dfc8def756f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
