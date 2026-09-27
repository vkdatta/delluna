export const name="forest";
export const id="dl_ed5c968834195c59de86";
export const url=new URL("../icons/forest.svg?v=13e8260b31df1eeed806e6f3e8a06223cdb759fd442d4ee32af010a3ca35dd06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
