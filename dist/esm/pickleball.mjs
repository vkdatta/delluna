export const name="pickleball";
export const id="dl_1f28eda7c26a9fdf7ca4";
export const url=new URL("../icons/pickleball.svg?v=431a20880a4a9bc4d66bda432df5db1c196ea34f60c96449fb316dd4235a7c8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
