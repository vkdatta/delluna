export const name="file-pdf-bold";
export const id="dl_e4b7689e1acf4b779157";
export const url=new URL("../icons/file-pdf-bold.svg?v=01a6d34809aaec296212a77a8a383eda4a8c721d26a7cf0569ea0ffaa4a9ae06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
