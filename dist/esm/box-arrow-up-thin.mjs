export const name="box-arrow-up-thin";
export const id="dl_c1abf4b351244837ab6b";
export const url=new URL("../icons/box-arrow-up-thin.svg?v=4672f493cb82c5cca541a4d0dfb72e8d42ca492ecfba41fb566fe8018ca72e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
