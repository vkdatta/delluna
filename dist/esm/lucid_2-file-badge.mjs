export const name="lucid_2-file-badge";
export const id="dl_995c05dc21a94d5bb594";
export const url=new URL("../icons/lucid_2-file-badge.svg?v=7b6fe7729893764ad23c0e115f7fae6d05a5ae5174f526fc49191f06cf7bbc90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
