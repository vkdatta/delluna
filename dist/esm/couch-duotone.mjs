export const name="couch-duotone";
export const id="dl_6ae96a20c7354a5196da";
export const url=new URL("../icons/couch-duotone.svg?v=e0933f8c568cd502e639fb0d884f37aab244a717b7e9db5ca28d47fe53e5c164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
