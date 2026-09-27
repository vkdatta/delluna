export const name="check-square";
export const id="dl_ecfb02d758274bc29675";
export const url=new URL("../icons/check-square.svg?v=eaa95e60b14a3e1f2dfc8d2f32bacdfaa1f6eb0b93d1a6f02afead39a3e402cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
