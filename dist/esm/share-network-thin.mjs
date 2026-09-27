export const name="share-network-thin";
export const id="dl_0a9b9323b1ca27fc0879";
export const url=new URL("../icons/share-network-thin.svg?v=a2553d7902a7b19426e9ac363c6edca0f087f8e2f4b16c6812e30b95b31637c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
