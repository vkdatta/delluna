export const name="gate-fill";
export const id="dl_38086e099f51a6e08ba6";
export const url=new URL("../icons/gate-fill.svg?v=5e54bb6bfc96001991b216d6806452b0883001533f30deb3e3f8bacb5f5a53ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
