export const name="smiley-blank-duotone";
export const id="dl_d30e0bd6a36b41a898ea";
export const url=new URL("../icons/S/smiley-blank-duotone.svg?v=47eda5fcca05ba7f1771974cfcc8656c6157a42ab396f19ea7da5bc253719d7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
