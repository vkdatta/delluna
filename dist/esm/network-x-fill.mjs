export const name="network-x-fill";
export const id="dl_338bfdc0a0714e889968";
export const url=new URL("../icons/network-x-fill.svg?v=632cbfd8106838c5d7f11afb6b1a041fe9701d4f218ac8fb07846488a0fd6cc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
