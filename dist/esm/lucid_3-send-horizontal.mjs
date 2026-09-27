export const name="lucid_3-send-horizontal";
export const id="dl_a97cdcb1a94c43a49d33";
export const url=new URL("../icons/lucid_3-send-horizontal.svg?v=bd384a8e3f6e8514c57f20d76ff3b0a9990d2eb80d7c19639d77816b3c748d3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
