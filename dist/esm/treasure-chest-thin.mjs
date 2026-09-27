export const name="treasure-chest-thin";
export const id="dl_2e2938045ba39b968ec6";
export const url=new URL("../icons/treasure-chest-thin.svg?v=7f99e6a252c9404d11150187a504c6f9277cee025405a899c47f1f2ee03a6da1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
