export const name="faders-fill";
export const id="dl_ddb8754b66ef4549a2a2";
export const url=new URL("../icons/faders-fill.svg?v=bcad69f63e2b3490785432d8dfad0e12d8e207da9567c17f5f8c67e21b7eecf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
