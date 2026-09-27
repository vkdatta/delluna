export const name="rule_folder-fill";
export const id="dl_57708951b5a6f1a2ec74";
export const url=new URL("../icons/rule_folder-fill.svg?v=be6b3d56809b830da03f8f256aaed233c1d1189ed0e29d987c5eaa2cce008509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
