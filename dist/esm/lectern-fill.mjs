export const name="lectern-fill";
export const id="dl_ed6c6192e5904c6abf2a";
export const url=new URL("../icons/lectern-fill.svg?v=a833419db9c6392fad41e16db67ac359c5bbedbe8ae6642b301d790df9f181c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
