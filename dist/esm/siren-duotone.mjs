export const name="siren-duotone";
export const id="dl_5a5837928bb8caedc422";
export const url=new URL("../icons/siren-duotone.svg?v=78c99688055233c1e1b676bb39b6d0576c68f7bda37779622e6c8922f9f71ccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
