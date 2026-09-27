export const name="thermometer-simple-fill";
export const id="dl_37edcaaf97cb2c51faaf";
export const url=new URL("../icons/thermometer-simple-fill.svg?v=8cf1ca8315c4f06fd0b440dff6c8bfe17d4c70b961ab68f9d7dcafc16a38de24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
