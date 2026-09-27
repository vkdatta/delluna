export const name="number-square-seven-bold";
export const id="dl_f63337f1b84945a39bc3";
export const url=new URL("../icons/number-square-seven-bold.svg?v=961b59484484d7ecf22a02d4df55d3d9703201406abc036e7c6403e1632d3f18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
