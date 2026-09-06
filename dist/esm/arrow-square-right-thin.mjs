export const name="arrow-square-right-thin";
export const id="dl_589564a109f24b5d9742";
export const url=new URL("../icons/arrow-square-right-thin.svg?v=bcc4ef143a626b9c7bb6342905055bb407100bfd2f3176c501e8954ff84eef49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
