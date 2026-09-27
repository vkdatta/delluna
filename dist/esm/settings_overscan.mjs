export const name="settings_overscan";
export const id="dl_046468659b1cc3ac0986";
export const url=new URL("../icons/settings_overscan.svg?v=3fd83960380c3dd78c5b5ab9f4063107253fc7c70690805fe31487e13b6c0a5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
