export const name="lucid_1-chevrons-left-right-ellipsis";
export const id="dl_66dfad4ff0724e80a58e";
export const url=new URL("../icons/lucid_1-chevrons-left-right-ellipsis.svg?v=12fb2b2c0000613cdd5a04613f0d269be285de67472df6491bf0283704818398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
