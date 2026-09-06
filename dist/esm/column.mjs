export const name="column";
export const id="dl_5fb04a9b931e4aa49680";
export const url=new URL("../icons/column.svg?v=8b4196e037ffb15d68f031b437fa081c6c1907e17ca58225bdf6e3bd6c4e1ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
