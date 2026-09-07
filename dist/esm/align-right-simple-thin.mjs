export const name="align-right-simple-thin";
export const id="dl_86a96b7d425b43068064";
export const url=new URL("../icons/align-right-simple-thin.svg?v=89aa139f02a162b66c96987225661eba049bc4c78903e129438f3d6349189b5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
