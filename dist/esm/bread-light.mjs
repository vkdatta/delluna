export const name="bread-light";
export const id="dl_20e30b0510014a96ba80";
export const url=new URL("../icons/bread-light.svg?v=7180c866bf9c2d042937944abfe193d25f2eefff4e01bfcec3053d101412d5a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
