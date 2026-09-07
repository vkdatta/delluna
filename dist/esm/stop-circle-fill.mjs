export const name="stop-circle-fill";
export const id="dl_e5094e0a613447338339";
export const url=new URL("../icons/S/stop-circle-fill.svg?v=7143ebc508198f458f58e889352a2c0f98e8fa3c2d9d99d1c7dfa18812755f1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
