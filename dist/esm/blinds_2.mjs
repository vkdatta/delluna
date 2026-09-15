export const name="blinds_2";
export const id="dl_9a50d19ead304dcfa5b6";
export const url=new URL("../icons/B/blinds_2.svg?v=f31d63e7c2c58b337b3604cfe1cedf0cee8b03193069bc5919526ba192ee4e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
