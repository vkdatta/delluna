export const name="grains-slash-bold";
export const id="dl_91670d3057244bd5a828";
export const url=new URL("../icons/grains-slash-bold.svg?v=64df4e23d0a50b9d25fc10f52c65a72203493f7f3c1375424fdbed24e49b534e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
