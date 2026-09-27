export const name="frame-corners-thin";
export const id="dl_a71c7a33ebcd4976a527";
export const url=new URL("../icons/frame-corners-thin.svg?v=c6c6b20e80eddc448d4684f562e910cd359fbb91933bc63a11c936cb32ff5147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
