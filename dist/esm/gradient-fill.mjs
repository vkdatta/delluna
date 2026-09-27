export const name="gradient-fill";
export const id="dl_6fe592880b60498aa19c";
export const url=new URL("../icons/gradient-fill.svg?v=68095e9ddb3deb1bbc03c26559462a506b8bf01eef0c92e466935165e3c942ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
