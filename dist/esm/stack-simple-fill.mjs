export const name="stack-simple-fill";
export const id="dl_3bca81e1b07e5bbb0224";
export const url=new URL("../icons/stack-simple-fill.svg?v=8a4f5f0fb7e46c8c72a354423d9fede66b54c88f77a941b69087500ae5e2bd85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
