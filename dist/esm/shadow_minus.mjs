export const name="shadow_minus";
export const id="dl_f6c7048583705b3668a5";
export const url=new URL("../icons/shadow_minus.svg?v=56006da7e8593eaf39658c8b2a35dafd8a28a6ef0daad5597d3c9dace433b827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
