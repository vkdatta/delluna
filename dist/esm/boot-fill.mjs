export const name="boot-fill";
export const id="dl_3c966ba0713344a2a6da";
export const url=new URL("../icons/boot-fill.svg?v=9affa550f7d4ace737aadf0039e7e2319e78acf942212aa403993e9024c70c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
