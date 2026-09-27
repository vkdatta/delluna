export const name="lucid_2-files";
export const id="dl_0c796e09992241f1b579";
export const url=new URL("../icons/lucid_2-files.svg?v=0c10b484b906d842df0f45ec92dac15d7d3885a305123258d32d1b1d1bd24d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
