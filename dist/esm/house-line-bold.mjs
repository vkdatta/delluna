export const name="house-line-bold";
export const id="dl_c06271b5fe764829a739";
export const url=new URL("../icons/house-line-bold.svg?v=91f813afa263d9eefb2304737e8a36bb6701833e8c07f417e7dedd407cf7a846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
