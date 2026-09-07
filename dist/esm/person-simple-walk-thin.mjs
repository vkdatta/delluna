export const name="person-simple-walk-thin";
export const id="dl_2ba0ce4a40f240969424";
export const url=new URL("../icons/person-simple-walk-thin.svg?v=9f7010eb1f350ffbc45e46dd6e413f0a93641a6e067f4cb0a0492ce53c1fcea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
