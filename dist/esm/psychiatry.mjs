export const name="psychiatry";
export const id="dl_7aa025d3dcea56ea6146";
export const url=new URL("../icons/psychiatry.svg?v=8c28cd9f890d669ecc46cb0520dd503dc8ad22eb679490355b83bc22e966f381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
