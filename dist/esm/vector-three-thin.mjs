export const name="vector-three-thin";
export const id="dl_cd8cfd0dcced389255e2";
export const url=new URL("../icons/vector-three-thin.svg?v=cf0fbfb2677723d5f6053d5d4d115907389f955e8011e568462ddf31603b43cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
