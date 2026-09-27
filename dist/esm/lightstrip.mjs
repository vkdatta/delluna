export const name="lightstrip";
export const id="dl_cb90d27019a879e9a384";
export const url=new URL("../icons/lightstrip.svg?v=e52f5a96a40db8a00485bdfbd4a052e72fee2c5036254dfa3a0bc207e73316ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
