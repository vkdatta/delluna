export const name="all_match-fill";
export const id="dl_0f29e9cb95314e7e9863";
export const url=new URL("../icons/all_match-fill.svg?v=68cc9051b1a4aeb6264006c91893c558dafb15ef9ae3ab37ce71ea57d01f4b92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
