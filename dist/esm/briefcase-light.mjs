export const name="briefcase-light";
export const id="dl_73821e8b628a42c6a589";
export const url=new URL("../icons/briefcase-light.svg?v=d27b75cb5f9ccf09e42de2a51fc0534abe9e83d309e906e9f85e6baefad64ed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
