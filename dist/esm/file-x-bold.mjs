export const name="file-x-bold";
export const id="dl_c4d6bc03e6614d2d80bd";
export const url=new URL("../icons/file-x-bold.svg?v=5c8c52e889b29f0e0ea35709e932c84405a22703933d0079a23d56d04ace4778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
