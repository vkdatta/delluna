export const name="browser-light";
export const id="dl_32cacd7d08464e80a949";
export const url=new URL("../icons/browser-light.svg?v=ae5aac8323659df46c4faf8d45a52951fb38bb64f2caa8c6e4e4bb0ffd259cf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
