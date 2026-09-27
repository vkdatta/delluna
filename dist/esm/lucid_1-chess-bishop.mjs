export const name="lucid_1-chess-bishop";
export const id="dl_6804b40db5c94f5bb8fd";
export const url=new URL("../icons/lucid_1-chess-bishop.svg?v=0b23016eadd13b78c317e11cd41201a1a53d0f51365ef8ea7a82bd39ae424d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
