export const name="arrows-out-line-horizontal-bold";
export const id="dl_8f98f9326af24673824b";
export const url=new URL("../icons/arrows-out-line-horizontal-bold.svg?v=b447e9cde01105de0f52cdbc52cc97d48ccd4a20a9b0da875fb8d08f1b299893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
