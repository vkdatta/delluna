export const name="person-simple-duotone";
export const id="dl_d3e2a626fd6347aaa319";
export const url=new URL("../icons/person-simple-duotone.svg?v=b1fd6386da820d39e87c73c74e286595cd1af28db5b8814f4dd2ddeb77629616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
