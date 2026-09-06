export const name="cursor-text-duotone";
export const id="dl_7fdde463fede4f2c8fe0";
export const url=new URL("../icons/cursor-text-duotone.svg?v=8ba3564a52adb05351effcfa5b33a500a6c888f256f764bdefead3135c167444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
