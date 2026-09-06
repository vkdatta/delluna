export const name="hand-soap-fill";
export const id="dl_eed3ba6cbc084bdc8022";
export const url=new URL("../icons/hand-soap-fill.svg?v=c06e027622d3b0bbbba046ece790cc7bcf6b8f4c8517368c7cf75bcdbc5011a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
