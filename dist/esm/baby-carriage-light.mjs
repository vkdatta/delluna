export const name="baby-carriage-light";
export const id="dl_28790674bfd54b59b499";
export const url=new URL("../icons/baby-carriage-light.svg?v=d5775d9742ae1311bd13f0e725fb6dc8e0790466a316215b3296fbc3cc3f8ab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
