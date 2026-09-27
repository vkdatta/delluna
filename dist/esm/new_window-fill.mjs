export const name="new_window-fill";
export const id="dl_9e3696e8084a5ec1f910";
export const url=new URL("../icons/new_window-fill.svg?v=2c5b708157c6cac2f579ad6d11690932c5caf50c72511b7d910a9eac1ee4f3b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
