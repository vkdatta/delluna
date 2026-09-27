export const name="columns-light";
export const id="dl_ef6ba0272cb048d59f4b";
export const url=new URL("../icons/columns-light.svg?v=1a9df9625822238ad5b76b618a5a0fd27fbf85d74f998deb646cf9609923e302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
