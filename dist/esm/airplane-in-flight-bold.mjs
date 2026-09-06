export const name="airplane-in-flight-bold";
export const id="dl_65a927240b8d4467a61f";
export const url=new URL("../icons/airplane-in-flight-bold.svg?v=819907cedd1c4a6ecef0a6f8bf8a45b70c8effae35495d0625c7d07345d2ef8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
