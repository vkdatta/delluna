export const name="puzzle-piece-bold";
export const id="dl_85447ea816b144a78646";
export const url=new URL("../icons/puzzle-piece-bold.svg?v=9b715fe8f60b7ae87f15874ca14957d103688d17ca69d708e5ad3ce4052386db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
