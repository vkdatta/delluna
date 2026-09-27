export const name="lucid_1-bow-arrow";
export const id="dl_ac9ced4b0a62421dbc73";
export const url=new URL("../icons/lucid_1-bow-arrow.svg?v=9ab11bf0e4fd48f8fe2cc9bf8b45de6d57c1933fd1d8a32161fab265fa2babd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
