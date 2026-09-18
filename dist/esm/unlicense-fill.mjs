export const name="unlicense-fill";
export const id="dl_ce3bbddf90ad43a7918e";
export const url=new URL("../icons/U/unlicense-fill.svg?v=85a0d2fdc2b5fdca1dd7c9db1af63af3f671e9a4c9efccd67b7e4bf14f5ed0fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
