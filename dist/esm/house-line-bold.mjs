export const name="house-line-bold";
export const id="dl_c06271b5fe764829a739";
export const url=new URL("../icons/house-line-bold.svg?v=a37369ea53a5dc042a442b38a0145af7e6c04deadc1d72b3e746433bd84c1fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
