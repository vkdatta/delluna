export const name="heart-fill";
export const id="dl_1037e181091d4a13923a";
export const url=new URL("../icons/heart-fill.svg?v=d68c3a4041cf89a4a3d4824fbe64780aba0206b345edd01033b1b41023b8c5ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
