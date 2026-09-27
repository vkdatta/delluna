export const name="night_shelter-fill";
export const id="dl_674a19f6589d0b438e3b";
export const url=new URL("../icons/night_shelter-fill.svg?v=6023356e4e9cdd23f6ba0f09ceb3c98b03ba0ec232f484a6915ddba97bf04642",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
