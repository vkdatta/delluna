export const name="file-lock-bold";
export const id="dl_a31f05fe638f4b238d9b";
export const url=new URL("../icons/file-lock-bold.svg?v=ac8817ca135df43e077b9f98e9b68ec87e706eba853a6ac27dcc025ffe729a3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
