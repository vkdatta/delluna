export const name="unfold_down";
export const id="dl_82ad4cc138d345bb93b6";
export const url=new URL("../icons/all_60_named_svgs/unfold_down.svg?v=ee6a839bc04d202a9535cf54f7f9c5a1ec13aca653171d65dc5ee2a7e0885b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
