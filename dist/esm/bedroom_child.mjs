export const name="bedroom_child";
export const id="dl_ce46a35393ac87e10221";
export const url=new URL("../icons/bedroom_child.svg?v=5c24ec64337f7893deefd6db38627aceb862be0fd0ca34a2282c72e55da949df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
