export const name="vector-two-fill";
export const id="dl_d47277dc3c85294c265d";
export const url=new URL("../icons/vector-two-fill.svg?v=4528ddb670240448cef11d1168fde836ee99b7d218c861c1a11a76b9a40e1b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
