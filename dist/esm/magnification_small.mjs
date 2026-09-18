export const name="magnification_small";
export const id="dl_6261bc3a33be4971a072";
export const url=new URL("../icons/M/magnification_small.svg?v=f630147f100f6c71b0c0e96fed1833facb7e4b61e125e526e780de8c56557c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
