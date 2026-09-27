export const name="star-four-thin";
export const id="dl_525afcad7f25af4a5a9e";
export const url=new URL("../icons/star-four-thin.svg?v=5aea1ca157667c1ec0a67aaa5543bfa20f1629d8294b7b688f4927005a422f58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
