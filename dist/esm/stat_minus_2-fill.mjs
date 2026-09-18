export const name="stat_minus_2-fill";
export const id="dl_8cb0f5cded144bef8af4";
export const url=new URL("../icons/stat_minus_2-fill.svg?v=5c0fa5fb0a17132d480d0a61ee0ce69cb84961a97ec4df96b64fbcb1fbc7a947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
