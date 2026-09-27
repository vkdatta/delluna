export const name="solar-roof-duotone";
export const id="dl_f4bbf3c10b062d43d572";
export const url=new URL("../icons/solar-roof-duotone.svg?v=26907d26b556be43b5cf459a1d1d967d48994833555f5d2f87e1f29535afab7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
