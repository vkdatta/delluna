export const name="trend-down-light";
export const id="dl_cd7fc5db34aaf2f5fea5";
export const url=new URL("../icons/trend-down-light.svg?v=cb846c89f0f0aaa8466d035f77e0a1838c3267750291a33f815aed28ae7f0109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
