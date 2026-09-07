export const name="flag-checkered-fill";
export const id="dl_8b9b2948e30f48d89439";
export const url=new URL("../icons/flag-checkered-fill.svg?v=d08b7eec6bca94d316bd003ac72c72c18a0ac5997d2648d7011f767314db1e7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
