export const name="heart-straight-light";
export const id="dl_c58feda2ddec4708af95";
export const url=new URL("../icons/heart-straight-light.svg?v=480cf896981ae3bdb1692714b89f35314f21beb9a8ae9d6ff46ab9155dcc6216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
