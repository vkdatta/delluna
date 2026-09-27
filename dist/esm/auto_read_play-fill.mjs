export const name="auto_read_play-fill";
export const id="dl_d573d3e16673bbbb682a";
export const url=new URL("../icons/auto_read_play-fill.svg?v=016ae6f75d73ed76b2fe577de2ddbccd66834746db8a916bda5c32a9bfe4e0e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
