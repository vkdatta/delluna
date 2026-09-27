export const name="turkish-lira";
export const id="dl_d2e1c79698d44856be5c";
export const url=new URL("../icons/turkish-lira.svg?v=3f3ec994b931d6d2c6395f220573d6d633697689be4769be0e67ad05dc3c556f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
