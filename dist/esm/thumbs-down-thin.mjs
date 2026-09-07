export const name="thumbs-down-thin";
export const id="dl_acc3e3d4a48c4e65a344";
export const url=new URL("../icons/T/thumbs-down-thin.svg?v=21f20eb6a840d4b72f8d83dc542c2af3ac2afab605b2ff29be1163f5a66cebfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
