export const name="printer";
export const id="dl_5511a9dead514b528e2d";
export const url=new URL("../icons/printer.svg?v=398705192743d7ced5da5ca18f2b9e69759284276596f3dd3787720093d3f57e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
