export const name="balloon-bold";
export const id="dl_c2ef96ecc66f4b63ab12";
export const url=new URL("../icons/balloon-bold.svg?v=084242e38d913e9578ea9f7a6de48a41991ae0c44ea760295721a8e8bf2a4299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
