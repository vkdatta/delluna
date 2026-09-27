export const name="sanitizer";
export const id="dl_529c2c93b48a212c24e0";
export const url=new URL("../icons/sanitizer.svg?v=06b8224cc5bb4173459c4a12ca0c87def2a0b71a7e2c3e5088598e1b7017035d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
