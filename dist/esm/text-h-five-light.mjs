export const name="text-h-five-light";
export const id="dl_f758c265b28c7e5ff5df";
export const url=new URL("../icons/text-h-five-light.svg?v=0bdfa41095e882cff7287d6a6d9bf998b9dce20d12a24db4b59862f5d28bb2d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
