export const name="medical_information";
export const id="dl_b284e62bb53d19a99c9e";
export const url=new URL("../icons/medical_information.svg?v=dbb0294788af850b3830e6dac2a2e3b4eb5dbfd16fd33d11222726cc1550c929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
