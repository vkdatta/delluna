export const name="side_navigation-fill";
export const id="dl_37d83b73838c442ba131";
export const url=new URL("../icons/side_navigation-fill.svg?v=0156948a99a0947a8d8e3b14b47073654b12bca39c1012611f45d41005292039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
