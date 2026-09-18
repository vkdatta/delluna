export const name="emergency_home";
export const id="dl_8574f2c2f3104fbc90d3";
export const url=new URL("../icons/emergency_home.svg?v=62ef37ef235c988ca7d92cf64413fd055ad5a202ae6e47d45566ac97f52128ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
