export const name="square-fill";
export const id="dl_21027e7a59c69e8aec6f";
export const url=new URL("../icons/square-fill.svg?v=33782f53b22bdbfbd5f62aa36aa57774ea2901f612951535b9bfee38b6ad2f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
