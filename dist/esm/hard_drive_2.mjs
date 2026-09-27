export const name="hard_drive_2";
export const id="dl_b408fe640e7512fc0c4e";
export const url=new URL("../icons/hard_drive_2.svg?v=ee9030c4fecbeab3b2f97075b42b7bb90ab1d55ab1d2433f8a296c0e289beebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
