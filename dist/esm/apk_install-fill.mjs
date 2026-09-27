export const name="apk_install-fill";
export const id="dl_2bee0f6330cee6e8ea25";
export const url=new URL("../icons/apk_install-fill.svg?v=072ebe5b33be21f79052888e358e4f3f3fd908ac4850990d0e0203e1ff069a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
