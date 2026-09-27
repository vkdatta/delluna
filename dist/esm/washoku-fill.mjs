export const name="washoku-fill";
export const id="dl_eb37b260e41537b1cf8c";
export const url=new URL("../icons/washoku-fill.svg?v=30aac185c69ecee981be8b1a8016b7f25973dc91b9c83567b3a93f5801a1098e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
