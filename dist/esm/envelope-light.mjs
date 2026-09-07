export const name="envelope-light";
export const id="dl_1fc8d9ba9cc54da288f2";
export const url=new URL("../icons/envelope-light.svg?v=ec683a143453d87e638e89606197e06e786db397c0bb18de7e859a1b9315424c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
