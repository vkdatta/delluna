export const name="club-bold";
export const id="dl_4fb508b131a649eba647";
export const url=new URL("../icons/club-bold.svg?v=db9eaa3ef550bc449150717d19adf2addc84525298c749af93952383521f2870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
