export const name="outer-ring-x";
export const id="dl_1a02444d7ae2fb315a0c";
export const url=new URL("../icons/outer-ring-x.svg?v=41e8f9834949dc93939fce60a12387e4e8e6c98665a49a438531ac422649ab20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
