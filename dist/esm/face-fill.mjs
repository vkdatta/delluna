export const name="face-fill";
export const id="dl_84a79ae25ba84fea81b6";
export const url=new URL("../icons/F/face-fill.svg?v=68f0abbfcb19f077946c44781ac9fd52de8849dc20175ed84c92818dc12792e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
