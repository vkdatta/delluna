export const name="presentation";
export const id="dl_c7c185e6c5f74395847d";
export const url=new URL("../icons/presentation.svg?v=c3b8f80a9e5a6c79924fc818503b0902770cf2efa22c1ec083813eeb04ee4cd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
