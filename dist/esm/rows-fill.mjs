export const name="rows-fill";
export const id="dl_946d89a25100484bb448";
export const url=new URL("../icons/rows-fill.svg?v=c858cca7768ad53fea2f620f3709631e427c0ca5f73d37cadb645c91802428e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
