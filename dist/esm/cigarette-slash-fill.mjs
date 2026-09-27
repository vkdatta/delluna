export const name="cigarette-slash-fill";
export const id="dl_b2b93d176e294fd7afa0";
export const url=new URL("../icons/cigarette-slash-fill.svg?v=f77a68c4557a68270638367192511ce105a7b8ab0eba79fb24db4bd073aa6812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
