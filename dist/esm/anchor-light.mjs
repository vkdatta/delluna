export const name="anchor-light";
export const id="dl_8b3d77d5cea74591be68";
export const url=new URL("../icons/anchor-light.svg?v=95ed0b29dfcdb76e6a63e858a796df1d3751065625ee6799882bab88e34de8c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
