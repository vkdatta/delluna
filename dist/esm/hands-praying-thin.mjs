export const name="hands-praying-thin";
export const id="dl_583220ff35b445558afe";
export const url=new URL("../icons/hands-praying-thin.svg?v=67c4c7405e5d65ead258ea37638f93a3cfeadcb904546ef7189efd5f21136a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
