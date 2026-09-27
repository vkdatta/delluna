export const name="rewind-fill";
export const id="dl_226d4f93114c45dbaf1d";
export const url=new URL("../icons/rewind-fill.svg?v=520fd85344e233a2776475de253d409fbfc81c8a46f9f619b8d40214f64499b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
