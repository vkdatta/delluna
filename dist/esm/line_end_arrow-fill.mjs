export const name="line_end_arrow-fill";
export const id="dl_205db7bf341e5886300d";
export const url=new URL("../icons/line_end_arrow-fill.svg?v=ae674aac0e3d31ff773c0379273d36a0b37b3eda01a888c18f65f6f2b0e13186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
