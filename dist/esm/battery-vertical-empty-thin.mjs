export const name="battery-vertical-empty-thin";
export const id="dl_3bfd39bf1f9a48119865";
export const url=new URL("../icons/battery-vertical-empty-thin.svg?v=dfa27833ac0de58ae4d4428f8483d0085f955a384976076e7885640eacc7fcba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
