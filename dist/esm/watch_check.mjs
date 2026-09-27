export const name="watch_check";
export const id="dl_c917ea9cb6f70c5dcd90";
export const url=new URL("../icons/watch_check.svg?v=5d8468be1236effe5f75b39a07656210e7e491e3ae1efdebbcdb02fc88827563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
