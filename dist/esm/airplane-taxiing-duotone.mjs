export const name="airplane-taxiing-duotone";
export const id="dl_bdbadb67b0444dcf8c34";
export const url=new URL("../icons/airplane-taxiing-duotone.svg?v=2fd3c836535bbfd3340be3dcda73719e6285a502c677ac669b4797932eef3bc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
