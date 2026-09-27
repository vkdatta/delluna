export const name="clipboard-text";
export const id="dl_8d85692d524f4030bd14";
export const url=new URL("../icons/clipboard-text.svg?v=1a65c673b6f9bb52647db33b9753e852da46644a754522dac68563e934c6d1cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
