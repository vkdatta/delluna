export const name="download_2";
export const id="dl_d85edf8b753b63294acc";
export const url=new URL("../icons/download_2.svg?v=08f37edce0a60133bc6949ece336dc253364b63be52a98ef54eba90315f0bf5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
