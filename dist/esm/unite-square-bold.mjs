export const name="unite-square-bold";
export const id="dl_b46b0f4251b0461281e8";
export const url=new URL("../icons/U/unite-square-bold.svg?v=12901020447b6d8d8ba910722f1fcd658a02cb0ffb4071671693dfe345f8bea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
