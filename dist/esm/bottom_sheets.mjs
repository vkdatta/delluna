export const name="bottom_sheets";
export const id="dl_a3133819b830661223c8";
export const url=new URL("../icons/bottom_sheets.svg?v=bc97a70d21dff74bbbde3bc7c3b3827b576da0057a3f5593efac6d171a67168d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
