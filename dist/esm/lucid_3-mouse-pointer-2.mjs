export const name="lucid_3-mouse-pointer-2";
export const id="dl_91e99d22e91c44979d04";
export const url=new URL("../icons/lucid_3-mouse-pointer-2.svg?v=30586729f7bfdd996b0a9265cefc2c5369dbcb50ccd7e3d59a7af9190f02ad07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
