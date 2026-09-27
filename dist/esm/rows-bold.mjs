export const name="rows-bold";
export const id="dl_604e3cd7634943cfab7e";
export const url=new URL("../icons/rows-bold.svg?v=00cd60a8cd1f49b55c95a5d880dfa39990fec8c446e86cbcc35c76af7291d62c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
