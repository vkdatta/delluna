export const name="draft";
export const id="dl_5452ed2a239629a7a32b";
export const url=new URL("../icons/draft.svg?v=5bf807c46e026b325cabb20b1aac1041c772631cc9dcce29296c0b03f86c1aa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
