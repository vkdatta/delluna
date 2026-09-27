export const name="lucid_2-file-code";
export const id="dl_c8f6a673caac421e9aef";
export const url=new URL("../icons/lucid_2-file-code.svg?v=e93e16b0c612ab165a1c9cd70cab79f6b1243b1d6ebe6f5381302e50f13c27f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
