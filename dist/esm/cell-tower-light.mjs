export const name="cell-tower-light";
export const id="dl_b819ae99c7294b9c90ec";
export const url=new URL("../icons/cell-tower-light.svg?v=c012009207bc1980a79d5b4432eee35b776b883813fb2f7bc7188958fdf09173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
