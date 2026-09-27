export const name="star";
export const id="dl_3eea1d58292990eebbc6";
export const url=new URL("../icons/star.svg?v=259b64eac99b3161a10e8739e4cd596d1fc9c2a68b603b89a008983116d3bb11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
