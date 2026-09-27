export const name="export_notes";
export const id="dl_2efe672af83392d8ce7a";
export const url=new URL("../icons/export_notes.svg?v=a698d57aa0ded647f37c11273260f783de46a27fce3e70a0473fd5e634f224d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
