export const name="number-square-two-bold";
export const id="dl_92d8ca1d09e94f96bb1b";
export const url=new URL("../icons/number-square-two-bold.svg?v=1f0368f92ebe3f2975d57128558f7fbda1a153af839a113d3884523dafe8ffa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
