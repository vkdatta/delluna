export const name="square-pilcrow";
export const id="dl_a2024cdc654544b3ab79";
export const url=new URL("../icons/square-pilcrow.svg?v=918d6bd60ed8dfb93d09772cea22047167b73dce85c4ff6ed4598cb01996299a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
