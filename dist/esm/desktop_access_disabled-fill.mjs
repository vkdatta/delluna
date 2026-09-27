export const name="desktop_access_disabled-fill";
export const id="dl_a9ea1d010a9591f41669";
export const url=new URL("../icons/desktop_access_disabled-fill.svg?v=65c337aa820d4c1585629cf0c9db1cf86d8d575b3f510d7de64cada9df276b97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
