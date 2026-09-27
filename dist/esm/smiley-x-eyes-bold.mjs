export const name="smiley-x-eyes-bold";
export const id="dl_b78421402f02386b2a2b";
export const url=new URL("../icons/smiley-x-eyes-bold.svg?v=c10a7edd2c30a9889618c1ed2ba3157ce770d6b3a60a242906293d36af3f3aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
