export const name="castle-turret-fill";
export const id="dl_38560704b7c94d6583c5";
export const url=new URL("../icons/castle-turret-fill.svg?v=840b70aba445cb5a14daa9a32a0dc06038a3d90eb7c0d988dd33285a8f2c3ecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
