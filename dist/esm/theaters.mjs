export const name="theaters";
export const id="dl_659f2cd69266435d92d8";
export const url=new URL("../icons/theaters.svg?v=49c6751c73b37d6e938f89c1e9912108dd422875acc3da45c8ceb7c5ed4e3584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
