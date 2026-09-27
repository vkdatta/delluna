export const name="escalator-up-fill";
export const id="dl_6c1163b777c9441fbb12";
export const url=new URL("../icons/escalator-up-fill.svg?v=25738c2da540146f293062c21738817c5bea7563723a9869aaf0e45d9447d61d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
