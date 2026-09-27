export const name="loupe";
export const id="dl_f5b008193be21a31eb1c";
export const url=new URL("../icons/loupe.svg?v=5f6d78689d74ae4cebd6cffd15225c91445a64c9a73b923953dac69c0c75e77e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
