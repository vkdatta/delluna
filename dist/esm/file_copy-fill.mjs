export const name="file_copy-fill";
export const id="dl_ec59511ec66274864644";
export const url=new URL("../icons/file_copy-fill.svg?v=b8f4145ab79b9b368ea50522774f8c4c9fa2f8a6eaae3ec5dab7dc69192f228e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
