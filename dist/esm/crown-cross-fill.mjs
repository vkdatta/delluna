export const name="crown-cross-fill";
export const id="dl_85ebfc77af8d4a4a9da7";
export const url=new URL("../icons/crown-cross-fill.svg?v=cfcec807b76e027712de5f79cf49af615b60501ce0abfef4a1772a43e9aab1f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
