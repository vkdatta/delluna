export const name="undo-2";
export const id="dl_c4b452afad9842ebb125";
export const url=new URL("../icons/undo-2.svg?v=f7e3ee07d05084dcebae7fd82949127ba3836c37e8e1ce3570a62ec200676b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
