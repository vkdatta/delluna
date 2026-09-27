export const name="close-fill";
export const id="dl_43c2dec12016e447572c";
export const url=new URL("../icons/close-fill.svg?v=ab8aa2ab160fa6fe6a24d9f969b1b0963b504450e33ae22b423a491a6d76fc5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
