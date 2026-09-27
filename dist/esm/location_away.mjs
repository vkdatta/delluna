export const name="location_away";
export const id="dl_62fa16915c0fb16da10c";
export const url=new URL("../icons/location_away.svg?v=4eb3e1b7c025f456830f60c2e10b6bd2ae504121f25edc5e4e8f9e2a567f94f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
