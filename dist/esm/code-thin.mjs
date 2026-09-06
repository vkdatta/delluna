export const name="code-thin";
export const id="dl_34b23232687b42079dc0";
export const url=new URL("../icons/code-thin.svg?v=3648916199666288abd39f03efaa9ca686ea5ea743b3bd6df6d3a8bf8e7bfe31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
