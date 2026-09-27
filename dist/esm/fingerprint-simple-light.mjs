export const name="fingerprint-simple-light";
export const id="dl_c533d8d9fa6c47dab7fe";
export const url=new URL("../icons/fingerprint-simple-light.svg?v=18a46ad58329776ca5806e80c658b52fce31f4dc0e53d1cdbb2f4d18b26d2c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
