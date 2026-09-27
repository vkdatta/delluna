export const name="lucid_1-award";
export const id="dl_92c839234acb41e796c2";
export const url=new URL("../icons/lucid_1-award.svg?v=bf93389153cec758cfeb9bd6c12f0e6bd9ea119aab2579719f85179b009bff0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
