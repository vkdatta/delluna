export const name="block";
export const id="dl_eeb07f08e0f85b911515";
export const url=new URL("../icons/block.svg?v=1a7be066b84d748d0f180b431bba1f42bebb545f1145e8c55e222089b9bdbc30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
