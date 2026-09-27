export const name="code-fill";
export const id="dl_f2c5d301857c4d88b848";
export const url=new URL("../icons/code-fill.svg?v=2f0d07ccd0a38b7357d1380775dc5b07be6598f45d96f8769621e2b0a4398692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
