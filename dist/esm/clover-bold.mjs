export const name="clover-bold";
export const id="dl_9ea01b41aa7f43d5a3e9";
export const url=new URL("../icons/clover-bold.svg?v=8d109d2f3190af389b1b48e14ff8a1ab901236ce4ff24b2361f528adaf6f1b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
