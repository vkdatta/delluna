export const name="not-equals-bold";
export const id="dl_0800e47993ed457ebed2";
export const url=new URL("../icons/not-equals-bold.svg?v=3188b7cca25fcffc3de4872fbe649aa2be743289d55f045ce2b33433315c7a80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
