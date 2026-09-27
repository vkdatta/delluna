export const name="question-thin";
export const id="dl_d0c925129b5741778310";
export const url=new URL("../icons/question-thin.svg?v=6d985bace39860a4ade0715a4fbf8925f57149a8cc80ddd92abea17d1858b8ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
