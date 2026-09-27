export const name="compass-rose-light";
export const id="dl_15c7a4ea74fd4f7bbb8d";
export const url=new URL("../icons/compass-rose-light.svg?v=b07e5cb80ab3ba6d17e56acbd4df22c81f399a0173bc8fb71d312276afda10c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
