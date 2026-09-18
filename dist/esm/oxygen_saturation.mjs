export const name="oxygen_saturation";
export const id="dl_f1a29135098d4770848a";
export const url=new URL("../icons/oxygen_saturation.svg?v=31a85c60e165eec938aaace547f8cb2aae9e82b46e3f4768851d43634916d9d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
