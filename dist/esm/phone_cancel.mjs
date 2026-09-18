export const name="phone_cancel";
export const id="dl_a9852bc38003428abdb9";
export const url=new URL("../icons/P/phone_cancel.svg?v=ccace463147504d5422627723822e6668faa74977ab4942dd5b22f5e770c07cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
