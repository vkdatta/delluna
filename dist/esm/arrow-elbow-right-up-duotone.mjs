export const name="arrow-elbow-right-up-duotone";
export const id="dl_447c8d4f9e68438494c8";
export const url=new URL("../icons/arrow-elbow-right-up-duotone.svg?v=58ac15d9bc9f4877dd115f5627039441f5b22182a7c13256821355a423d0547a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
