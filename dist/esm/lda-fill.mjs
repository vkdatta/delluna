export const name="lda-fill";
export const id="dl_e925b626ece1379d8705";
export const url=new URL("../icons/lda-fill.svg?v=598b16f964bd0450f752a98f6e3ca66962b76de21e3509f21c5c5ea4b38a3cb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
