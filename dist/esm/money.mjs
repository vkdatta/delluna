export const name="money";
export const id="dl_09eb634d0ffd4c63a64f";
export const url=new URL("../icons/money.svg?v=85f2ee45c76bff8ea4c35170e4c962ec7169bbb0ca8fc98a56a759087a7f045b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
