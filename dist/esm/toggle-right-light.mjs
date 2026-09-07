export const name="toggle-right-light";
export const id="dl_007bdcf4695d49de9bb4";
export const url=new URL("../icons/T/toggle-right-light.svg?v=b3a07ec4396d829ce035c3c1b70c2082da88a1594ce8b341b39f252e9c937ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
