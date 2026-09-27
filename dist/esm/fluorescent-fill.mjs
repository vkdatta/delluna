export const name="fluorescent-fill";
export const id="dl_c9ec3fd6ad938e3ada2f";
export const url=new URL("../icons/fluorescent-fill.svg?v=f43eefba481c9d3b307c9663761e0facb4f7dec6720e092a35dd28dcbb8c7773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
