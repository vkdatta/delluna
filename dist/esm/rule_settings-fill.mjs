export const name="rule_settings-fill";
export const id="dl_0fbad242b226c65b1f65";
export const url=new URL("../icons/rule_settings-fill.svg?v=7f42a40bb5fb6b81c357b9a00bed745a9149d4820b8e79d14abf7c28073eaf95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
