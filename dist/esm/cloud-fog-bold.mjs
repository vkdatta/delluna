export const name="cloud-fog-bold";
export const id="dl_4b22c831ee8e46919cf8";
export const url=new URL("../icons/cloud-fog-bold.svg?v=4f14cabe7563cea9c7f971f4d3f222907df7fd3b94b454a36264feb4115e712e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
