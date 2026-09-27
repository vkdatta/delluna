export const name="sign-out-fill";
export const id="dl_32aa6113e119e9968e39";
export const url=new URL("../icons/sign-out-fill.svg?v=3b1a2d97f1d8a95b3fb663e2f1027a747be74ea744449a866ebf05f756e343e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
