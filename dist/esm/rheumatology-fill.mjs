export const name="rheumatology-fill";
export const id="dl_ef105c000ed9906d152c";
export const url=new URL("../icons/rheumatology-fill.svg?v=8b48b1c5d118ba80c6ba0c021f42ddd558ce4d491afa51c8b8a471b0626720a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
