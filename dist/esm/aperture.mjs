export const name="aperture";
export const id="dl_4f0fb02c9dd3438a86d1";
export const url=new URL("../icons/aperture.svg?v=dc292be18c248bfc1ec9474ac7c2200d1303aca077a47530ebe0da9b064f2781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
