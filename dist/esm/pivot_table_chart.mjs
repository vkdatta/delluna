export const name="pivot_table_chart";
export const id="dl_e807e939c54eb9f8660e";
export const url=new URL("../icons/pivot_table_chart.svg?v=6d27241bdbed8ffe5af7798c89b5727f2a971e9b49ac5c3bae321849f66398fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
