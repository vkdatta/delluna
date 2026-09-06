export const name="city-duotone";
export const id="dl_f592ae4b81f047f2bd67";
export const url=new URL("../icons/city-duotone.svg?v=6af86d242c376695fafddbfba28788488e85bd760cb670c49d54ebf21f8a1a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
