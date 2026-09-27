export const name="diagnosis-fill";
export const id="dl_a7c5db9b815a3b3b7a26";
export const url=new URL("../icons/diagnosis-fill.svg?v=cd589265d8ac9c0179db9829e1f0ac5d788f0a7a8722b663799567638d69712b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
