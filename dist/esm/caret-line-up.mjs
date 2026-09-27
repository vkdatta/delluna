export const name="caret-line-up";
export const id="dl_8db12e20069b4124b7cb";
export const url=new URL("../icons/caret-line-up.svg?v=201dba603597fe18398ad185a48373fdc221ad139c3890d1cb6528f416074391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
