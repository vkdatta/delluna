export const name="strategy-thin";
export const id="dl_a3fb8f59eae29ab5a318";
export const url=new URL("../icons/strategy-thin.svg?v=2b6a75b859b98e1337c662560484e26712b63b3bdbf97b614cb0f7ea90e34aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
