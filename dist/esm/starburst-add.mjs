export const name="starburst-add";
export const id="dl_0032b51b80c8140ecc36";
export const url=new URL("../icons/starburst-add.svg?v=9f010ed64620751235b78e6e459c352fbaa7187558f70270c95025ed5b69f78e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
