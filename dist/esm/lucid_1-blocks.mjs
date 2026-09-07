export const name="lucid_1-blocks";
export const id="dl_8ac24224feeb48acac54";
export const url=new URL("../icons/lucid_1-blocks.svg?v=9f90e82f4f4b64ac201a726dd2f4f19f71e65dbd3740eddfc190ba603e22f708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
