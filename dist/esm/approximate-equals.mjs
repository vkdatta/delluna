export const name="approximate-equals";
export const id="dl_b28f7cd7d7d343feb100";
export const url=new URL("../icons/approximate-equals.svg?v=bf74acc982466b0c7ffd8d305c49f50d723f2a735b69e7aefa2aeed24f1f9af2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
