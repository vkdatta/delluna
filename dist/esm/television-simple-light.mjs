export const name="television-simple-light";
export const id="dl_8116cbcc0d8f363949b9";
export const url=new URL("../icons/television-simple-light.svg?v=232c0d794b0a4556f2a4394d45902fe059b20e15d86aa61180171e020af05190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
