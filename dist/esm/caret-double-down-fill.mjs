export const name="caret-double-down-fill";
export const id="dl_49b05128a8e54f59ba25";
export const url=new URL("../icons/caret-double-down-fill.svg?v=a38014ab15dab09e75de3084cecb8ea775c48b8df7b165bb53e4ac93f733609c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
