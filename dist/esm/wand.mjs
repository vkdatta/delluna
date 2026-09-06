export const name="wand";
export const id="dl_dd54abcefe064e298c36";
export const url=new URL("../icons/wand.svg?v=0361a4be9fbf196abc5129feb558ceb7e5d3f2b714bbb8caef50f06dd895ee4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
