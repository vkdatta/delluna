export const name="cheers-fill";
export const id="dl_6bdd1e2d27db4671a12f";
export const url=new URL("../icons/cheers-fill.svg?v=69ca529ca323bbf7e830d4c192a273982ebc06ebdee03cb38a20cb2e8b1f48fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
