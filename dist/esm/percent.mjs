export const name="percent";
export const id="dl_5ac274e5d4b742818724";
export const url=new URL("../icons/percent.svg?v=42d20ef7a59b7898f059840a20fa91339a9d83201e3651c3ad4f1ea65c21fa34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
