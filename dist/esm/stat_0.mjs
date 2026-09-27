export const name="stat_0";
export const id="dl_a78826374a5205a6426b";
export const url=new URL("../icons/stat_0.svg?v=ca6496b755057b116c72cd892f79f46f08d622fbf81d4bf76b95ca87fd0d8a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
