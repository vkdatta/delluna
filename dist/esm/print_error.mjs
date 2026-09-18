export const name="print_error";
export const id="dl_013079dd151540c6942b";
export const url=new URL("../icons/P/print_error.svg?v=31c5ab4d62d0c939fbb3d735d57690b198f79cd8d69fd9c71bae4ba96b616c88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
