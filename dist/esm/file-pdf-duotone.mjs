export const name="file-pdf-duotone";
export const id="dl_290e2a6dfa304ec8b990";
export const url=new URL("../icons/file-pdf-duotone.svg?v=a7839feb4458fea822b12c9c357f8b6882a3ddbb316d348e913398dd64826c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
