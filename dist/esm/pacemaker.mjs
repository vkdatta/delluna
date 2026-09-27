export const name="pacemaker";
export const id="dl_ea557ff3ba1046c9ed3c";
export const url=new URL("../icons/pacemaker.svg?v=82c1a77c4443301ac86d2858d9cfdd61b10ec46b2cd567a523e7603d7f386505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
