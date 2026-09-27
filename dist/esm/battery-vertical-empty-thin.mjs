export const name="battery-vertical-empty-thin";
export const id="dl_3bfd39bf1f9a48119865";
export const url=new URL("../icons/battery-vertical-empty-thin.svg?v=3704780f05fda785ba47f33436801daafa07dedcde13f81490e4407b4383db2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
