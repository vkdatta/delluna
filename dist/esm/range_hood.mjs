export const name="range_hood";
export const id="dl_b1fd89532d8928c2d60f";
export const url=new URL("../icons/range_hood.svg?v=952937973e110dc5658aa838d618e376154e3c0e79177e01fc2e96747f0f9e22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
