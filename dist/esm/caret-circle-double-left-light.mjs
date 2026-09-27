export const name="caret-circle-double-left-light";
export const id="dl_5b8c422e5e5c47e58ba4";
export const url=new URL("../icons/caret-circle-double-left-light.svg?v=5783427adef53d648bae81add3b334f27a68046b0f6aeb253b43c692e36fbfb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
