export const name="number-seven-fill";
export const id="dl_27e635101a464bf19d5c";
export const url=new URL("../icons/number-seven-fill.svg?v=532c0f0133a43886a59a485612bb3cc08cc2c24a24c388964fbe9da7b7281cd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
