export const name="fatarrow";
export const id="dl_e63d4d286a3a4d079e9d";
export const url=new URL("../icons/fatarrow.svg?v=abc5b1c1ce14700ea7a9f1407b0c49d1cfe8acdcfff5fa31358ab511bc27e003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
