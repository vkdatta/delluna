export const name="globe_uk-fill";
export const id="dl_285b81b91d2ba0ff60d1";
export const url=new URL("../icons/globe_uk-fill.svg?v=6e38ea547a6bbb3a8d2e5bd3163fd32efe9ce27977868b1709abe7ccad0cc866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
