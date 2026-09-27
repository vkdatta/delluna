export const name="pencil-slash-thin";
export const id="dl_401ac3f7fffa40b69b27";
export const url=new URL("../icons/pencil-slash-thin.svg?v=55a3be57b4b3d73989aa22ffcc561152d2fa8dd3643e785660abdf5e82a6efce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
