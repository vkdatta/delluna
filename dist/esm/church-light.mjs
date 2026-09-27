export const name="church-light";
export const id="dl_8cb0a38871b64dfc83da";
export const url=new URL("../icons/church-light.svg?v=408bd04440ca66786a9578d56bac6ed1df0fa9dce8b8c18eaa396792d00497b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
