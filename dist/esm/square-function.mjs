export const name="square-function";
export const id="dl_eb0d883b25404ed1bf61";
export const url=new URL("../icons/square-function.svg?v=49b13c13bdc4456e04357f2fcea416bff82fcff3a663050d9f5cc15133b28a14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
