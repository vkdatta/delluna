export const name="sports_bar-fill";
export const id="dl_5125a564579746ad970f";
export const url=new URL("../icons/sports_bar-fill.svg?v=52adf23033e191fe0617b25136fa0e60de79f2860cf3f95324b0c124d10326b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
