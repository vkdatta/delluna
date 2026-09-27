export const name="bungalow-fill";
export const id="dl_ee2ebdec8f8457265150";
export const url=new URL("../icons/bungalow-fill.svg?v=81d64b6a377c35cba1e739aaeb1ad45528c36f1fc2c445e19a95335cf074831a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
