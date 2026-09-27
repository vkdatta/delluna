export const name="g_translate-fill";
export const id="dl_86c8e8a47e0861fac99d";
export const url=new URL("../icons/g_translate-fill.svg?v=a6f87c80b111d1e9d2d6e95eee309d5a15e63a4ac1122969cbbff32da17e8c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
