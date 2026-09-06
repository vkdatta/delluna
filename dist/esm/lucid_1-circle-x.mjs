export const name="lucid_1-circle-x";
export const id="dl_b0b670126ab54e2296d9";
export const url=new URL("../icons/lucid_1-circle-x.svg?v=8fd948849f7f3606860c8cccd6f8dbc0d80dfcb76b7ef6281b79896514579517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
