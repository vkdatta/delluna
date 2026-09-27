export const name="number-circle-eight";
export const id="dl_1bd0d1cebc09415396fa";
export const url=new URL("../icons/number-circle-eight.svg?v=2d36f2ebe2e10c5f0cf0200bbd0a9905fb8b3953b77591ea3139ba2c6565015c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
