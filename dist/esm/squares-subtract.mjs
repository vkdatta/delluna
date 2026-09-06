export const name="squares-subtract";
export const id="dl_478fb075120e4826b25d";
export const url=new URL("../icons/squares-subtract.svg?v=42df1b6689474a780a6e47b84f7eef74467add0f6a3560fae95ae23303852bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
