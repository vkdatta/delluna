export const name="file-sql";
export const id="dl_471c77335c6949c79dcf";
export const url=new URL("../icons/file-sql.svg?v=f022f57b8304b5baf162353e2cf0f3777dd1475affc14bc322e8e0d15e6715b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
