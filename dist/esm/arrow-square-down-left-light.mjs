export const name="arrow-square-down-left-light";
export const id="dl_d348b9feece343e585b5";
export const url=new URL("../icons/arrow-square-down-left-light.svg?v=265423023e4804772e18b39fea4477cc844aa59c3efe883e408bd0bb59349860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
