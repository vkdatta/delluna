export const name="chalkboard-duotone";
export const id="dl_ee36ceda7f324ac2ab26";
export const url=new URL("../icons/chalkboard-duotone.svg?v=672f11b93f4ab6422511fe48992e8e0513a617a83932260082fc078bf8b444a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
