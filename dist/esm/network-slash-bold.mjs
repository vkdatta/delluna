export const name="network-slash-bold";
export const id="dl_5e5c123d41e448aa9514";
export const url=new URL("../icons/network-slash-bold.svg?v=a205353215e9987c7eaf9df1672b2a45f6e88e9a834126535ecf2204d2caeed0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
