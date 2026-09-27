export const name="yin-yang-thin";
export const id="dl_876f5f6d4b153e9e60ea";
export const url=new URL("../icons/yin-yang-thin.svg?v=3565a476be94f0aaed04557b159ef3cd5003724cce5f6426df9b73c2553d3721",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
