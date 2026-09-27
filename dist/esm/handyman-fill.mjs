export const name="handyman-fill";
export const id="dl_9fb4306e4afa89a234f0";
export const url=new URL("../icons/handyman-fill.svg?v=56ade38a558aa09b0e2221ab653878edcc8d23d87dce6c4d33a21fb4d7a7b330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
