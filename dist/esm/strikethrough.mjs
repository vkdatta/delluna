export const name="strikethrough";
export const id="dl_1bec68d538c2490daa10";
export const url=new URL("../icons/strikethrough.svg?v=48555a60928d372e4fa9afb18f6d53cd220e533fd0cbcec00fc10420126eb93b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
