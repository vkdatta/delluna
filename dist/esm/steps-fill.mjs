export const name="steps-fill";
export const id="dl_22d0f09d70d1bb6067be";
export const url=new URL("../icons/steps-fill.svg?v=34c9ed24f1ad26371ec4e73ad6a02b3b4c0e97fb08b6c230c5980f46a6f9825b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
