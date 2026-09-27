export const name="cardholder";
export const id="dl_1a1ab9528a4d49d6837e";
export const url=new URL("../icons/cardholder.svg?v=b0d3b5c598415a49624e2a18c8e78557678b2b7a5e5d0f1f7274de115f8ed72e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
