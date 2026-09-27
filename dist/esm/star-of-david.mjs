export const name="star-of-david";
export const id="dl_18e4770eab255d12dea6";
export const url=new URL("../icons/star-of-david.svg?v=a53919aaef6e4fde0bb24aeb84222fa2d3f6585f0f328a2d323d5892259e4f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
