export const name="text-h-light";
export const id="dl_ab55d01fd83fbdd972b9";
export const url=new URL("../icons/text-h-light.svg?v=822de641fa70e7f22ef3017d31589988b3e072caa1cdfbeb96692c5665a1f1d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
