export const name="square-split-vertical-bold";
export const id="dl_065020530dfe417ba5c8";
export const url=new URL("../icons/S/square-split-vertical-bold.svg?v=066160d93b66f7d3fdeba9af16a6c15d7bcc9671794ffc67b4ec1a623b7ecf23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
