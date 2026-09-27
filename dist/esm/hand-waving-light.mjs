export const name="hand-waving-light";
export const id="dl_20cb6ddf421e4804a3f7";
export const url=new URL("../icons/hand-waving-light.svg?v=a9059a23b00cbce42a74a30225c4c285ea0c2bce22247a9cc4ac27ff2624b3cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
