export const name="not-superset-of-thin";
export const id="dl_093e8347151e4203b731";
export const url=new URL("../icons/not-superset-of-thin.svg?v=525b24a7945319d91adbe5453a50e79b6ea4cbde73cf74f613f999cd6bf0d1a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
