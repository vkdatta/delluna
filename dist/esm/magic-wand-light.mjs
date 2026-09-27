export const name="magic-wand-light";
export const id="dl_3f40f4d2e26e481ba198";
export const url=new URL("../icons/magic-wand-light.svg?v=353718a182bf0888e2baa330a540341f9c03456973a5ffe580f19dcc9b46a323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
