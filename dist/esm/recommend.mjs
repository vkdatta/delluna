export const name="recommend";
export const id="dl_18e0a43008dc293810db";
export const url=new URL("../icons/recommend.svg?v=a9dabe9af821578d4282c080dd50b24bae9ac860a22901be2763fade6d7d6c11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
