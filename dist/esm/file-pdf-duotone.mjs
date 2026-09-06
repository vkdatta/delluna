export const name="file-pdf-duotone";
export const id="dl_290e2a6dfa304ec8b990";
export const url=new URL("../icons/file-pdf-duotone.svg?v=451b593fba4a0ae151561d77eb1517fa50d8ddfcf8517afc817fa8972fd3b5bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
