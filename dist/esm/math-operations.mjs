export const name="math-operations";
export const id="dl_1aab9890953b49578748";
export const url=new URL("../icons/math-operations.svg?v=f32734daae2b3f67aaa317fe5848221a178cb4d7ebe613843a5ab6736fa864d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
