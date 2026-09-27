export const name="man_3-fill";
export const id="dl_7e59ddb715e86f1fac8c";
export const url=new URL("../icons/man_3-fill.svg?v=f49254422c36fec5cf7d3a692dc6d566b5c47ee552b6999247ede61ba6bf018e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
