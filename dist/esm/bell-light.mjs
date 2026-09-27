export const name="bell-light";
export const id="dl_4dd3841f26ef47c3b442";
export const url=new URL("../icons/bell-light.svg?v=a7d9a0f3e027c9128876abdff065b3c1cd4a79ce8e1cb6d401fccce3de9dc804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
