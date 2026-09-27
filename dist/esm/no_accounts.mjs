export const name="no_accounts";
export const id="dl_b4d66ea2f799a8a655f4";
export const url=new URL("../icons/no_accounts.svg?v=d7e79e93ec644f2d6a6da8ee469ba4c34ed7ca4742adab5631e95c7f1a8714c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
