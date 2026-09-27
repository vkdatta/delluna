export const name="arrows-horizontal";
export const id="dl_da0b4df6f518446db7c6";
export const url=new URL("../icons/arrows-horizontal.svg?v=e56d01ecf871ce7d3382b7771f465df1b483e719a9f11fe1862622ef5c63c7e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
