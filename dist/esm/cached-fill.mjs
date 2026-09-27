export const name="cached-fill";
export const id="dl_ed4f041d01195f0805d5";
export const url=new URL("../icons/cached-fill.svg?v=e7d1253fd54ad65e6a61e0bddce9f5aaf5a0390f9ebe6191edbbf89da6467d79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
