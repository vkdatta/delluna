export const name="lucid_3-map";
export const id="dl_630b8e5b1dd14d678e9c";
export const url=new URL("../icons/lucid_3-map.svg?v=b8e0d9316d4ea25341ed6da529b1e4c15435c85ae6f8f3d2644bfb1ad6aba287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
