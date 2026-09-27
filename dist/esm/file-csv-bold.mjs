export const name="file-csv-bold";
export const id="dl_281d6f171a3440a0b86a";
export const url=new URL("../icons/file-csv-bold.svg?v=d5f2c2e66619756e3ff60d6fc41639736ffd7e359866e5adcf9bc3ffcd355911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
