export const name="cowboy-hat-bold";
export const id="dl_5a18ba2bfa3542d085f4";
export const url=new URL("../icons/cowboy-hat-bold.svg?v=dfc2d2f63b6f11ad0613cf0081a856981dc40c2096765c404db9930d33d3d961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
