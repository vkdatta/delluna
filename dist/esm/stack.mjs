export const name="stack";
export const id="dl_97c7e1c8589a4f1abd08";
export const url=new URL("../icons/S/stack.svg?v=ee9eaaeb345e8a28c9662cf8a59147cb86080bd922e41f143444189e0116ea7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
