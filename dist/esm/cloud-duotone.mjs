export const name="cloud-duotone";
export const id="dl_95ec4c3d9b1b49d7aa74";
export const url=new URL("../icons/cloud-duotone.svg?v=a8ea95bb5469bd11787bf97974739db64c9caf388f14ea08c16617cddfcef40b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
