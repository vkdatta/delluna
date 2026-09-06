export const name="dev-to-logo-fill";
export const id="dl_be9a9fc7bc3c4ad48bb8";
export const url=new URL("../icons/dev-to-logo-fill.svg?v=1fb2558a126c4843aec5bb6075fed3c0e97c66617ac39cab4a67610a3e5a14ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
