export const name="circle-cross";
export const id="dl_c95217bbd53349baa33e";
export const url=new URL("../icons/close/circle-cross.svg?v=468dc521375a6796fe9d969bcf06730b3009db5eec67830fc8b1e2152498aebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
