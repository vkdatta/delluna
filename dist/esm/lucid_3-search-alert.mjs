export const name="lucid_3-search-alert";
export const id="dl_d64602537a694524b35f";
export const url=new URL("../icons/lucid_3-search-alert.svg?v=1493b0f1ab182c3eaca42559145589c70e5448795dff38eb368c846c35da47c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
