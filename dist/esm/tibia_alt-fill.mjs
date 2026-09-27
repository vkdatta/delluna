export const name="tibia_alt-fill";
export const id="dl_1f443c4a8df938a75094";
export const url=new URL("../icons/tibia_alt-fill.svg?v=420292336baf39d966397cd1b4c136d9d3f07912179c80d71aca9645fbf7238c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
