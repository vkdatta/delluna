export const name="square-half-bottom";
export const id="dl_85444868696c605dd52d";
export const url=new URL("../icons/square-half-bottom.svg?v=f36267030b0087135544c5e38c02559f0e29801813a7c4f2f19621db41357945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
