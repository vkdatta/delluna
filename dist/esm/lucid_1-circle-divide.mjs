export const name="lucid_1-circle-divide";
export const id="dl_fabce23b1b794e1d926f";
export const url=new URL("../icons/lucid_1-circle-divide.svg?v=4bc7f1bde7a95140acdefc55caa4be3ce004d4519132125e08b4063bc446a797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
