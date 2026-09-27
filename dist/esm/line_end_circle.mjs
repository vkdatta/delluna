export const name="line_end_circle";
export const id="dl_ea43a05c6fb32fce072f";
export const url=new URL("../icons/line_end_circle.svg?v=ee227191d3796c34467e1b3dc90bfdee0d034b98802d4598cc8da351b5d00992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
