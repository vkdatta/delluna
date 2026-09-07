export const name="anchor-light";
export const id="dl_8b3d77d5cea74591be68";
export const url=new URL("../icons/anchor-light.svg?v=f4aa7a0c5409e8821c345eed52f1cbdf3060cef6714a6a3001ec3cf270563c8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
