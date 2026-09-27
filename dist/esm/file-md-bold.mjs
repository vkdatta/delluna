export const name="file-md-bold";
export const id="dl_4cc3ab37d0af4c75a46c";
export const url=new URL("../icons/file-md-bold.svg?v=d312181ca8343a62b1b35e77c9b9f0767ae06e3ec43efe87d20cb4c57df7d7bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
