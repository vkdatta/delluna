export const name="lucid_1-arrow-big-down-dash";
export const id="dl_df9f75c1f8f54a79b8a5";
export const url=new URL("../icons/lucid_1-arrow-big-down-dash.svg?v=28ccc83464fea7ba9e0bbf6212edd8e6d096e9c32dc963d203bf3a782dd42061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
