export const name="arrow-elbow-down-left-fill";
export const id="dl_0688c30a3db44b74a252";
export const url=new URL("../icons/arrow-elbow-down-left-fill.svg?v=da1ff849b9a59093d1076b2db18a44e5879b73909248691411ddba9f46ed3b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
