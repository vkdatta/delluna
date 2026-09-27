export const name="graph_6-fill";
export const id="dl_7347ee9e2d7c8a44c6bd";
export const url=new URL("../icons/graph_6-fill.svg?v=59a6b04c30ed2fc2c3fd30c4a12daaa484ce647e2f36e33aa3eb670d8274caf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
