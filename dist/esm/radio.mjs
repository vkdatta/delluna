export const name="radio";
export const id="dl_b6e1c5df04a24945b13f";
export const url=new URL("../icons/radio.svg?v=07218be27079d4dd3ff8fc105594e15e95532c5260beadb8565173a47d03c80c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
