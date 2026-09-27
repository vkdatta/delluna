export const name="strategy-light";
export const id="dl_1d9da770a9741d74272c";
export const url=new URL("../icons/strategy-light.svg?v=46f92edb0e3b03b55fc310572021da9c5f8b9eb2b97358d1f742256dd5d6956a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
