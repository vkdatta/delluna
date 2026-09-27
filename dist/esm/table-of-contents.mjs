export const name="table-of-contents";
export const id="dl_225e0e8df4b74f339430";
export const url=new URL("../icons/table-of-contents.svg?v=fc04acf90614b45443be0c75eab286212e42a9e733ebe751436c741b5e0a7479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
