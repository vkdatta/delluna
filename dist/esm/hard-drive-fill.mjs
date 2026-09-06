export const name="hard-drive-fill";
export const id="dl_f4962c8899454dc7a69d";
export const url=new URL("../icons/hard-drive-fill.svg?v=b31125c438fc50af14abb5b4af746251cd9d2f110fd865ebba4b6d6b2b859399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
