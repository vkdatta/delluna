export const name="imagesearch_roller";
export const id="dl_f1fffbf643b6052b1c29";
export const url=new URL("../icons/imagesearch_roller.svg?v=3048e653d929157136bf47aa0c19115d1206dbde47bed620fbdee8cb06dd601c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
