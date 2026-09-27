export const name="lucid_1-chevrons-down";
export const id="dl_b11fdd6e83e84740b21b";
export const url=new URL("../icons/lucid_1-chevrons-down.svg?v=c7473fc8cb26129348558a3aab18a0c5fe7b526460d471c995bb01b45a5a6e3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
