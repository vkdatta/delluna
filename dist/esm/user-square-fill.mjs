export const name="user-square-fill";
export const id="dl_72b92ea8b882d472f37b";
export const url=new URL("../icons/user-square-fill.svg?v=e2c428e49055b36832d62247b6921b9fecc3b4de648a8d9c9f6430ac6b8ac85e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
