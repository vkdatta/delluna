export const name="crown-cross-light";
export const id="dl_6784d6da14be47c5b9f3";
export const url=new URL("../icons/crown-cross-light.svg?v=84f40a1f9341b8036cda8693db5702e090452abc94b6a5097f791e3baf0a3eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
