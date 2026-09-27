export const name="mouse-fill";
export const id="dl_93656e8021cbb17936a1";
export const url=new URL("../icons/mouse-fill.svg?v=e07dd1ca2094f1d817705b45bb6aac39bef094337b3404c162bcdfb4bbd6556e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
