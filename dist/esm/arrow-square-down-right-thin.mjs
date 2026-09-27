export const name="arrow-square-down-right-thin";
export const id="dl_5882f75b873e43faa8dd";
export const url=new URL("../icons/arrow-square-down-right-thin.svg?v=eaabd9808da8c8a5e4344d924a1502bdacb7c74b45966f17e75abbb428b90379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
