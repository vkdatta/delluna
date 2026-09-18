export const name="language_chinese_quick-fill";
export const id="dl_f2496beb95744ad6af90";
export const url=new URL("../icons/language_chinese_quick-fill.svg?v=4b2dd22686fc6c6f3ef8cd49bd4cecbc60c87d9ff589438a3768b5d04e72a040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
