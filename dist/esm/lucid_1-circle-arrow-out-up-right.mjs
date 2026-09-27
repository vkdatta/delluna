export const name="lucid_1-circle-arrow-out-up-right";
export const id="dl_0d77d46c9d074e80aa04";
export const url=new URL("../icons/lucid_1-circle-arrow-out-up-right.svg?v=43a9f8036e6246182dea1023b7522c56614013a66fe74259e04bf6d8b1cf093d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
