export const name="flyover";
export const id="dl_8f1a8ecb4b748688a816";
export const url=new URL("../icons/flyover.svg?v=64cf7f28a000460a4bfeb23fb4b7dd11a3bcc701325c9e935ec8d3e34edb82dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
