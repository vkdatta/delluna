export const name="number-square-eight-bold";
export const id="dl_57a5b9ac347146d3bc42";
export const url=new URL("../icons/number-square-eight-bold.svg?v=8dec330d4dc0bb003f125fc0fd306ca05b8b1488c247163af02fea672992406c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
