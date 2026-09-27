export const name="lucid_1-angle";
export const id="dl_245d6e9f0e8a45e88d4b";
export const url=new URL("../icons/lucid_1-angle.svg?v=5c1ea6d45512eed8f653266d90c3ea6e32254f6161b233b1390111ba4ccf8b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
