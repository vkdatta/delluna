export const name="tray-light";
export const id="dl_1c0ac3c04b30971129f9";
export const url=new URL("../icons/tray-light.svg?v=c3f8f472999a6bb3127a050389dddafd8ee6874859a837ecf5180d5fa06a41ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
