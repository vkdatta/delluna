export const name="document-add";
export const id="dl_ce1056d83100d8723339";
export const url=new URL("../icons/document-add.svg?v=7696e94681a519d0b5cbcb23bae5c464a1ea83f4c73350839cbf01e3e8072fe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
