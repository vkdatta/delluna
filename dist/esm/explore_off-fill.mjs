export const name="explore_off-fill";
export const id="dl_38c185d5cbcd5da0b29c";
export const url=new URL("../icons/explore_off-fill.svg?v=18b2de239a290c0cdc8c7adaf651f0b0614e67d2c6e76e650ada40b0966fb7f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
