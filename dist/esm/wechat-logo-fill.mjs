export const name="wechat-logo-fill";
export const id="dl_b5911063d5bc81bec17f";
export const url=new URL("../icons/wechat-logo-fill.svg?v=49447afe4b5b6113df63531edbc61eb04d6121f93d056e77bd4664bf7bdeaa47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
