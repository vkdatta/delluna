export const name="credit_score-fill";
export const id="dl_b05b08bd6dc1301c8778";
export const url=new URL("../icons/credit_score-fill.svg?v=9edaf7c39450b8afc88b70c05fa19e035a37cac167ed3ea4930531af751be93d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
