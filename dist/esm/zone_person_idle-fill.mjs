export const name="zone_person_idle-fill";
export const id="dl_b6734c3014821f4b2de2";
export const url=new URL("../icons/zone_person_idle-fill.svg?v=a43ed8068c2dce7152e57a705e64bba80b8acb1a48b92b7dbafd5ecf7f8cace8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
