export const name="text-strikethrough-duotone";
export const id="dl_f8a6d336669945b4b81c";
export const url=new URL("../icons/T/text-strikethrough-duotone.svg?v=347bc189d9ceae102b9b26034df7b0117a62c749ca818417cdd185fa40daa854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
