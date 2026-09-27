export const name="superset-of-light";
export const id="dl_1eb9e818e970994a4117";
export const url=new URL("../icons/superset-of-light.svg?v=dc2ebd43a994c6aa1a5fce80dc8c561a7e13d38cde3f072fb608df2a898bb0e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
