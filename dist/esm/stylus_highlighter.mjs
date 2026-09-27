export const name="stylus_highlighter";
export const id="dl_666ab64dd7fd8802f9e6";
export const url=new URL("../icons/stylus_highlighter.svg?v=ddeb1434dd41605437d12b637c045e21959058b1381ce23d5c0e7b876057662d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
