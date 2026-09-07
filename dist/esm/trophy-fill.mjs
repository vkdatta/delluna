export const name="trophy-fill";
export const id="dl_98151eecf3e54a899702";
export const url=new URL("../icons/T/trophy-fill.svg?v=6d12bce1ad52193fe62e6d9cba30fbce19b355f3f096cafc316c3bc36c1f7ebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
