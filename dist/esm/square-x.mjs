export const name="square-x";
export const id="dl_548abb2ab44445979260";
export const url=new URL("../icons/square-x.svg?v=75a2803710751620dda05cee769987c71cc49e199c166e952459f115a1c65276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
