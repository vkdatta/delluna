export const name="collapse-chevron";
export const id="dl_aaa6a8fb2ad1449d5d41";
export const url=new URL("../icons/collapse-chevron.svg?v=e6d8a54cc90ab51aea838324037c5a5987148b5c5da528e8a157d5dc1ed6ec9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
