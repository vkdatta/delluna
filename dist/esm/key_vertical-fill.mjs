export const name="key_vertical-fill";
export const id="dl_1b1342d82f5c84e7b374";
export const url=new URL("../icons/key_vertical-fill.svg?v=e2235069de790e9fbbeeae60c9e005412d9eeecd89f9aa68fbd790fc5a6b4701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
