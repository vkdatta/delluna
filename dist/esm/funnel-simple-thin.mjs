export const name="funnel-simple-thin";
export const id="dl_4a06db57ef414c63a093";
export const url=new URL("../icons/funnel-simple-thin.svg?v=929bad2a67179335fec403c8474cfab198c935b73207cc5ab13b6a3ae11056d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
