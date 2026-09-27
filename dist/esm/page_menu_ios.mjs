export const name="page_menu_ios";
export const id="dl_6db01598d051a82e8c37";
export const url=new URL("../icons/page_menu_ios.svg?v=1c5d75fb7b314a830eaecbc0f6ffb8bc52313f87c69c9ee450eb1d54498cc6c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
