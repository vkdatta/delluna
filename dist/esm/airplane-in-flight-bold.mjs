export const name="airplane-in-flight-bold";
export const id="dl_65a927240b8d4467a61f";
export const url=new URL("../icons/airplane-in-flight-bold.svg?v=45f2f0e4b3b5e70c3aa4848058d138f0f26f491c741d1ef249b70ca1e4a8b32f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
