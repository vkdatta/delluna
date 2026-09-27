export const name="user-rectangle-bold";
export const id="dl_b8f1c68a87ffc44ba950";
export const url=new URL("../icons/user-rectangle-bold.svg?v=3c37c12ea90f9558bf2b3436ff07534850bcebd7cd2910ffab588c1cbcfa98bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
