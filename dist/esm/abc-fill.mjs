export const name="abc-fill";
export const id="dl_d87eb5cd51816790c63a";
export const url=new URL("../icons/abc-fill.svg?v=91b53be57339461288fff663b7cdca4e28f17ef8c223eaa7cef04165c5b4164f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
