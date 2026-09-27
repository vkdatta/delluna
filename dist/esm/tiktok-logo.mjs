export const name="tiktok-logo";
export const id="dl_d5a63fa708c422c1d968";
export const url=new URL("../icons/tiktok-logo.svg?v=d4452c8b30245bc5d6a59385f656e4fc09b830e15c3dde28ddc02ac82c78103c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
