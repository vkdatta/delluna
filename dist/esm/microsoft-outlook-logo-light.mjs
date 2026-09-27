export const name="microsoft-outlook-logo-light";
export const id="dl_d2ecb954a4424363a8c1";
export const url=new URL("../icons/microsoft-outlook-logo-light.svg?v=e8b2edba6647978210ee2c7765c8ba6e408e6c87381470c11a65aff95ea5f004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
