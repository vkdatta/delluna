export const name="disabled_visible-fill";
export const id="dl_30b3a278347fee56b96b";
export const url=new URL("../icons/disabled_visible-fill.svg?v=e6cbeec625a9228da4033f9bfbd56e5dfa9bd1cf4cde8df41ce9ed887b64c9fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
