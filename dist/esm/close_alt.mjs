export const name="close_alt";
export const id="dl_655c6e223d8f4b3da3c1";
export const url=new URL("../icons/all_60_named_svgs/close_alt.svg?v=9e671e9c4155d20a8840904039ca09769cb889ceaf71d8d7ff8df66c4fa92762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
