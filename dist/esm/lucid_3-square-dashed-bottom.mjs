export const name="lucid_3-square-dashed-bottom";
export const id="dl_5f4c2348eee84ccc86e9";
export const url=new URL("../icons/lucid_3-square-dashed-bottom.svg?v=b621124e24d829efbc1f96c2954d3bc387f379f31295a50ccc66842a4d910e97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
