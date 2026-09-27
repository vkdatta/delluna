export const name="sort-ascending";
export const id="dl_08ec2c8637b99a39ac16";
export const url=new URL("../icons/sort-ascending.svg?v=6b111847313f4ec6710041b89a5145202604e4fa8b1004e5a4a5d40397db47f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
