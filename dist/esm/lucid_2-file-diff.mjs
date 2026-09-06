export const name="lucid_2-file-diff";
export const id="dl_42c60557ce994afbb669";
export const url=new URL("../icons/lucid_2-file-diff.svg?v=7efec32ca5268808b386f5cd41d7cf62697a7f849e6fd34263f76531bd1738c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
