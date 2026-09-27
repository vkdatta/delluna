export const name="list-star-bold";
export const id="dl_2ea7853c2a0a4069ac9c";
export const url=new URL("../icons/list-star-bold.svg?v=c8f241e36ab5cc11c327f3e55c9480753fe8f4bc4aff4033f5a4d36277de3bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
