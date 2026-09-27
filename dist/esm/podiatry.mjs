export const name="podiatry";
export const id="dl_29b96f33ded3056c7f2d";
export const url=new URL("../icons/podiatry.svg?v=b0abc9d56597c07ab4698937d48355547774375bea8d9a469f1606c90b7392f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
