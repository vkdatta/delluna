export const name="lamp-pendant";
export const id="dl_e01d32823cf54564a4e9";
export const url=new URL("../icons/lamp-pendant.svg?v=10526eae685c7ec5a79cf2ac245ddea7f370a9b9d3a9a13ec2fc7a458b00cc10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
