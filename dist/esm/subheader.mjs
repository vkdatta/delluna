export const name="subheader";
export const id="dl_3d804008687e610aba5b";
export const url=new URL("../icons/subheader.svg?v=62c92a52ed465eb1129b348baef4a7b5cfec6f7238cedf59c810c972c031696a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
