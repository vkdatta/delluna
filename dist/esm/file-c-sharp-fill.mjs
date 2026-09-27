export const name="file-c-sharp-fill";
export const id="dl_0b765d05261a46b8a063";
export const url=new URL("../icons/file-c-sharp-fill.svg?v=80d0991957f5e1fbb3cdeb89dd0f0257af4f51a7604242fef6a8c097a33c99f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
