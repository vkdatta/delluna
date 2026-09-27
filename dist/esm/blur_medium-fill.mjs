export const name="blur_medium-fill";
export const id="dl_75123488b0eb10a796de";
export const url=new URL("../icons/blur_medium-fill.svg?v=8105ea908a41b513349aa7a680b16864f2ffb052a5b76863c102b18bccd7f420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
