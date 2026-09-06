export const name="hourglass-medium";
export const id="dl_665e67ab74164784b03e";
export const url=new URL("../icons/hourglass-medium.svg?v=1df2010fee4c6780a9014bf2a9e05234c7030b6eb22180eec70dece7881217ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
