export const name="codesandbox-logo-fill";
export const id="dl_1389f4ace47e456aa0fe";
export const url=new URL("../icons/codesandbox-logo-fill.svg?v=e1357b99d2477a166e56727fb9eef8e2cf9769eaba6681bec4955b54f7c0c4cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
