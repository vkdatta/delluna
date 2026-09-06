export const name="export-bold";
export const id="dl_4d71f244b1944670b7e9";
export const url=new URL("../icons/export-bold.svg?v=d61d7c31b6d339a99b623f2438dc34a732d0b4489368a210516ff45a4f8a53aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
