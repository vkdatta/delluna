export const name="square-pen";
export const id="dl_bfde6865c3284c9b8cec";
export const url=new URL("../icons/square-pen.svg?v=fc8222560bc64b61aa9f6f39c2c680a4e116c1b813f9abd35544c83813b5e0ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
