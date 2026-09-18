export const name="live_tv";
export const id="dl_ddd6493aaf344844b5f0";
export const url=new URL("../icons/live_tv.svg?v=1c3435e2fdda9c28c5a3f9b18591ad0da883e1047a00eb87503e32d4193b7260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
