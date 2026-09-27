export const name="face_down";
export const id="dl_cf5558d7e4d041d401df";
export const url=new URL("../icons/face_down.svg?v=5038cb9b5607523c7e6299d2b780301829c7b5b17590f55d02bf569c76649f99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
