export const name="routine";
export const id="dl_6445021ee6afe843dd2f";
export const url=new URL("../icons/routine.svg?v=2dc9ee8c203f3b2e2bbed1930e9b2b03caed04ccb7853b09c08a01709e65db2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
