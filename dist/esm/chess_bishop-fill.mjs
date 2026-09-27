export const name="chess_bishop-fill";
export const id="dl_ab3210b0d39ed45a566d";
export const url=new URL("../icons/chess_bishop-fill.svg?v=674e51f6697de4a0e391a669afc3e619ce0854b8909770b595c96927929cfa29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
