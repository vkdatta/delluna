export const name="rebase_edit";
export const id="dl_c4f45114021454974c85";
export const url=new URL("../icons/rebase_edit.svg?v=053a2da5817e8fc981d24d69b4540d7adffae3d8ad10c3e3b5e81cced9a32616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
