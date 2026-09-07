export const name="shirt-folded";
export const id="dl_1ed06404ea2a4334af97";
export const url=new URL("../icons/S/shirt-folded.svg?v=12e4f7469ec91f27543d0e218e2b4e10ad4081e2fd2d7db9fc5f7f7a61a6757c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
