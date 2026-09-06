export const name="lucid_3-signal-medium";
export const id="dl_2da688009cf64004b400";
export const url=new URL("../icons/lucid_3-signal-medium.svg?v=116e9c18fb253437fabc8ca18442fa2102ce839084015bf1e5c39c83329c738e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
