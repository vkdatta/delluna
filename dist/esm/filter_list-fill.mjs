export const name="filter_list-fill";
export const id="dl_dd0f9dd378c8556020ef";
export const url=new URL("../icons/filter_list-fill.svg?v=7f579d0b529a820f9e24e7f12c217e1a027c4fc7161f570d9afc7cf7b127e38f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
