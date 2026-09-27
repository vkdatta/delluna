export const name="globe_2_cancel-fill";
export const id="dl_5ba6e27fbbb9abbd6030";
export const url=new URL("../icons/globe_2_cancel-fill.svg?v=d4dea15e49e830a6beb29e77ceb45e9ba65af12db64fe239bd082ff086a478ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
