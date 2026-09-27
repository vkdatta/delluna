export const name="number-square-eight";
export const id="dl_429ba5372102433199c1";
export const url=new URL("../icons/number-square-eight.svg?v=c7f9d3094bec269413c9cc78eaf3509aed7557b50ed287e96ffc978d6b5c157f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
