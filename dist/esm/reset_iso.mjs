export const name="reset_iso";
export const id="dl_7b4ce5ea9b88821d0154";
export const url=new URL("../icons/reset_iso.svg?v=76e8e4a49bb077c388f102e1dd6c9135d8978f1994056d45fe46096ccf216df9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
