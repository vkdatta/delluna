export const name="dns";
export const id="dl_97142ed2187de64f6d8e";
export const url=new URL("../icons/dns.svg?v=98d5019fcc1fd4af27fc65dca0b1f9c25f4d97beb6900938f80027d8c825ed56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
