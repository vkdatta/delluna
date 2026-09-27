export const name="graph_2";
export const id="dl_0db951987fde7024529a";
export const url=new URL("../icons/graph_2.svg?v=e97629c8e14a580a0dc4ccd33c22c3206d9322b7418711cfa54666ff865206d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
