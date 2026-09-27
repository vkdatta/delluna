export const name="square-dashed-top-solid";
export const id="dl_506e73030ea841718898";
export const url=new URL("../icons/square-dashed-top-solid.svg?v=68953d30d02f1a6f9ba3ddeff2e070fe14054b393e52e5ee4e27705caba56d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
