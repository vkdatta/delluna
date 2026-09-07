export const name="greater-than-or-equal";
export const id="dl_1747d14e731d4919b1a6";
export const url=new URL("../icons/greater-than-or-equal.svg?v=ffde52be75e13583ddc6b46952d5a7db07304a6ee09ef060ff24c5cb62cb67b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
