export const name="wb_twilight";
export const id="dl_c763734b19d90980319e";
export const url=new URL("../icons/wb_twilight.svg?v=f6b7aa0ed20b5a21503085de16ff3190b7b6223ea235e89dd057fe957b03a249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
