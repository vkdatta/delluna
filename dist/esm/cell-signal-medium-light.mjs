export const name="cell-signal-medium-light";
export const id="dl_1b0c878dd00649c5b603";
export const url=new URL("../icons/cell-signal-medium-light.svg?v=cadc3f93fcce18ad9abcb3a013f0f8c8f328439023670755782ad3c1564f40c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
