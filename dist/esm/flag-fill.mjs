export const name="flag-fill";
export const id="dl_07fc8313c68d47459eb7";
export const url=new URL("../icons/flag-fill.svg?v=0f760e43686579282d54c252cc430cbf47b95d0565503f042992237a664870d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
