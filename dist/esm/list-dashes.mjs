export const name="list-dashes";
export const id="dl_a21ace86cd0d45189684";
export const url=new URL("../icons/list-dashes.svg?v=99ba527617e9bbc7f737ac756284f19565c799c9f2af9520c18a11e248a338ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
