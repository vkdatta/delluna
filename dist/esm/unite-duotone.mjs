export const name="unite-duotone";
export const id="dl_359acbc0a2bb47e6b688";
export const url=new URL("../icons/U/unite-duotone.svg?v=cbf8383fcf0c76745bf1ab9d885f0549d0f767e22c4570907c4ec700b75a4307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
