export const name="hand-withdraw-light";
export const id="dl_bd38256f22bf419a8646";
export const url=new URL("../icons/hand-withdraw-light.svg?v=c2f137a6598b865c604ff31821c66e463ee038ce8e0ebbfaf43a643c8369073f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
