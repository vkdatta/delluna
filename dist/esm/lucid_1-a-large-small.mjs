export const name="lucid_1-a-large-small";
export const id="dl_d7df4a25e0b74b889a2d";
export const url=new URL("../icons/lucid_1-a-large-small.svg?v=e97e1c1d9ebc8cfcb9165f6022ca22f7e3263c8efd06db377e0191bf3764a628",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
