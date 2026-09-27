export const name="stack_off-fill";
export const id="dl_525c3ff0228fd7430430";
export const url=new URL("../icons/stack_off-fill.svg?v=7f1003fa39e495dea96825c7f3a00a8a4e6641d48bf23eae8d073555fa858ec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
