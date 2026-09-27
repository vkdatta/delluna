export const name="wind-fill";
export const id="dl_215cdecc97201530fef3";
export const url=new URL("../icons/wind-fill.svg?v=16a282910826040bf2de4f7cb091885a1ff08e8c024d557eef40783b1cbbcfb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
