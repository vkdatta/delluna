export const name="humerus";
export const id="dl_6bd55517bd0c6507e025";
export const url=new URL("../icons/humerus.svg?v=bbc38f79138986feb59652a99045e6af78465fbbf3913612edc82324e126abdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
