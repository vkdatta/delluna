export const name="sheets";
export const id="dl_aba16ec6b15e4b49b73f";
export const url=new URL("../icons/sheets.svg?v=77f8f230fc7de20030e6049bc7e4fd79a8ceb7fb97a6f9bb6976c5438582c2a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
