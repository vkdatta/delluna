export const name="file-vue-bold";
export const id="dl_a54dc2fa9c1d4d938d14";
export const url=new URL("../icons/file-vue-bold.svg?v=4861783f21b53ba088642ef8111e17e00082c595570885148914e61b4dea0a8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
