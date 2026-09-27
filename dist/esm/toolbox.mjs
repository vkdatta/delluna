export const name="toolbox";
export const id="dl_22d3c9c948394f25988b";
export const url=new URL("../icons/toolbox.svg?v=b7a91935434fc61592b8c1615cdff08a030defe71477014b2bfa4334d6167901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
