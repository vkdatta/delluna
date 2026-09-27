export const name="view_apps";
export const id="dl_1755c55538eb988c9f01";
export const url=new URL("../icons/view_apps.svg?v=38afd0b30a24446806ce4b7d02f133630b9811e58cd4fae9aa3ac921b8fe34cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
