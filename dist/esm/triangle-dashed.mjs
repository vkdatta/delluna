export const name="triangle-dashed";
export const id="dl_12101ec8ed1640efaaac";
export const url=new URL("../icons/triangle-dashed.svg?v=8cffb4bcd09fd51160e4a464c17812c66fbc6a117321c7e937a85dfcbf34dd9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
