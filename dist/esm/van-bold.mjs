export const name="van-bold";
export const id="dl_d1685ed79edfe39b56c7";
export const url=new URL("../icons/van-bold.svg?v=199acc2244a46ca6c2fc9ad6df38840f88e5745077322369adca1e31691f69e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
