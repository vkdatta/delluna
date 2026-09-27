export const name="arrow-down-left";
export const id="dl_7a656e238d5b4158bd9f";
export const url=new URL("../icons/arrow-down-left.svg?v=ef3913e3458b75f13cb7764eab0b1c424478f9757041e59fd0c713b047c5f59e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
