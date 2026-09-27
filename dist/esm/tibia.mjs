export const name="tibia";
export const id="dl_b34443cea8fb865d9790";
export const url=new URL("../icons/tibia.svg?v=21146765698377a018d93d2418e3df7dd6b91069213fb86335970b1707a51243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
