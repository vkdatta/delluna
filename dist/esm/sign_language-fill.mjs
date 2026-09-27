export const name="sign_language-fill";
export const id="dl_e3086d70b7c97be07949";
export const url=new URL("../icons/sign_language-fill.svg?v=6cb152daaaba01181d220062e4a3df4840ac0797d68a977ed36508c909c759b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
