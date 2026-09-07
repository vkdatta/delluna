export const name="washing-machine-fill";
export const id="dl_d0d3c921c60a481a8c76";
export const url=new URL("../icons/W/washing-machine-fill.svg?v=5c18b727fe5fb5aab7a873bfe56155164751d97597903497f87a1f03e163aef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
