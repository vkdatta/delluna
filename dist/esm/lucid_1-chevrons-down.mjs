export const name="lucid_1-chevrons-down";
export const id="dl_b11fdd6e83e84740b21b";
export const url=new URL("../icons/lucid_1-chevrons-down.svg?v=bfb491026de8a4094b63c07e8eda1e2aacca87cbb1f880b31b614adae8e3ff23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
