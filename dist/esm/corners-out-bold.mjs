export const name="corners-out-bold";
export const id="dl_ad21b3ce2b8b470aa543";
export const url=new URL("../icons/corners-out-bold.svg?v=724c499fc98a9b265d0c5a06b6f78befbf3959b403b3ec825254eef1e2044a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
