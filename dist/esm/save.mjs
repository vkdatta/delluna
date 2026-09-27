export const name="save";
export const id="dl_115d8191922db15e7c2d";
export const url=new URL("../icons/save.svg?v=2e6c5d91d7787a76edf11ab93bd6f2ca26c31f82befa56115c796a3f95abe1e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
