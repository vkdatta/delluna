export const name="2k";
export const id="dl_3ab63d8d1146969bff8c";
export const url=new URL("../icons/2k.svg?v=8cf69a12d642bf3ff864f54a701dc406de3a5b7f1a37533544661235cf3d1aee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
