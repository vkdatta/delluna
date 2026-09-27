export const name="laps-fill";
export const id="dl_53f67ead0ce8c9d4f879";
export const url=new URL("../icons/laps-fill.svg?v=90702144181fa221d5e4dcc17ce3444b99c3044e1a5105969360550fc5b754bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
