export const name="align-top-duotone";
export const id="dl_beff6c4e3f7446c5a1a2";
export const url=new URL("../icons/align-top-duotone.svg?v=011a0568ce78e559fb08ec0d02f18c5807c75cff34c5a66930783410d0effcab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
