export const name="forward_to_inbox-fill";
export const id="dl_5a1d455e71890b7af293";
export const url=new URL("../icons/forward_to_inbox-fill.svg?v=1e88312958f59f87351ea45b4518af87226816ce2bdb91acc58e738b4ab1fa28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
