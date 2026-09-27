export const name="update_disabled-fill";
export const id="dl_cf3e470ec286f5cc0973";
export const url=new URL("../icons/update_disabled-fill.svg?v=f194188571f328ea44939bfc9f959c74f99aaedd8a050e3f62fdb94ceda0f54e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
