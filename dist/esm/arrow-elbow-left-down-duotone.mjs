export const name="arrow-elbow-left-down-duotone";
export const id="dl_6c5d7a1dd5f34eeca751";
export const url=new URL("../icons/arrow-elbow-left-down-duotone.svg?v=5b684c8a9160550881fd1f4615bbae2c990e37bb435fc4eb7f8880630b8b743a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
