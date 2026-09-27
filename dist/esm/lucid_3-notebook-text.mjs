export const name="lucid_3-notebook-text";
export const id="dl_eacf20dbbb4349d9b904";
export const url=new URL("../icons/lucid_3-notebook-text.svg?v=59c20eb8b801c3fb3a989b4e860d4571771603ff218da62a317be4af4164ff49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
