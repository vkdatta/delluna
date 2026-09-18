export const name="tablet_android";
export const id="dl_3121cbdc18cf423c8336";
export const url=new URL("../icons/tablet_android.svg?v=d2e0af7bf40636a62125a74ff484afccf03382eabe87a9221c45e0f927d2761c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
