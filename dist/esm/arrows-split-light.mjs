export const name="arrows-split-light";
export const id="dl_048ebcfee11a42f89c81";
export const url=new URL("../icons/arrows-split-light.svg?v=a787cfaa6e31e0334d83ab759a7a379e58ca87b72a9673e4bd2b955a60da0e6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
