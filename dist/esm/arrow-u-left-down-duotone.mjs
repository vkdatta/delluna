export const name="arrow-u-left-down-duotone";
export const id="dl_823a0f3ac8e34e78bdcd";
export const url=new URL("../icons/arrow-u-left-down-duotone.svg?v=9ecfce0d449b25dc598faebdb0faba2a467dc03b179ef75b0815976dfe369a50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
