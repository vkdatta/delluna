export const name="tote-duotone";
export const id="dl_399f58a8b336be812dbc";
export const url=new URL("../icons/tote-duotone.svg?v=9f2c4f0ce2543329f99a9082e414d89dfdef1acbba2525a7c6b5a7280e82bd10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
