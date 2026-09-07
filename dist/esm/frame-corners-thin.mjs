export const name="frame-corners-thin";
export const id="dl_a71c7a33ebcd4976a527";
export const url=new URL("../icons/frame-corners-thin.svg?v=2431b2cc95f2fa12f1fcd82886a481efe4ad9c9cf8d30afe2d4ba8f53ecbad4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
