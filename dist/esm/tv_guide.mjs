export const name="tv_guide";
export const id="dl_5712356a1e8b4fe6aa24";
export const url=new URL("../icons/T/tv_guide.svg?v=ee2077ba70e4f317fa40c2bd9dd3c49695b55055e4d8d267eea232275b7d757a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
