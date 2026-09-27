export const name="delete_sweep-fill";
export const id="dl_df85fe1c7d6acbe38af6";
export const url=new URL("../icons/delete_sweep-fill.svg?v=6e3ab3b3a71c95dc293c9153bcc349326dd5782be9178d16b07fd275e20a747d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
