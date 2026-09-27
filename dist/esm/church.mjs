export const name="church";
export const id="dl_e68236f4ffd07870ad69";
export const url=new URL("../icons/church.svg?v=1c5415eabd2f8983af46bc235e7579c0788ce742145cce65ca5b643442277e71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
