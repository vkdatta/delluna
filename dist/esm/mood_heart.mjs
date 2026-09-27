export const name="mood_heart";
export const id="dl_8208df240631f5afcf22";
export const url=new URL("../icons/mood_heart.svg?v=b16590f1888d799d555f4a01b0753e6bd1564194048875a6b5110e250d464d06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
