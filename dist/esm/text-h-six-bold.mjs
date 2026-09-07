export const name="text-h-six-bold";
export const id="dl_550ad6a9fa6c43d19ef5";
export const url=new URL("../icons/T/text-h-six-bold.svg?v=0146c75ca13079e7cb509fb16ee36f0d3e57b1e0b20c58d92052f3c97b057fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
