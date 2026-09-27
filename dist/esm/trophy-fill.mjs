export const name="trophy-fill";
export const id="dl_7d47f04f4ec572907700";
export const url=new URL("../icons/trophy-fill.svg?v=6d12bce1ad52193fe62e6d9cba30fbce19b355f3f096cafc316c3bc36c1f7ebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
