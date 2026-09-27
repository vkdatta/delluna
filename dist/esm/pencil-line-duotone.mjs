export const name="pencil-line-duotone";
export const id="dl_49beee9282854832a81a";
export const url=new URL("../icons/pencil-line-duotone.svg?v=63ec63289d845933b637f3c3df98bf03036b4bf0c7e7253613c17f6614291c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
