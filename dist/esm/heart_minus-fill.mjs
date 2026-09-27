export const name="heart_minus-fill";
export const id="dl_6486d7313c32158429de";
export const url=new URL("../icons/heart_minus-fill.svg?v=e29c9d340af455957bb94b5a52ebaa7e9d5a61aca9b81ccba10dad199c72d521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
