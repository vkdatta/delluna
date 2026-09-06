export const name="arrow-elbow-right-down-fill";
export const id="dl_4137a75894c04b3980a1";
export const url=new URL("../icons/arrow-elbow-right-down-fill.svg?v=b68634e9cc6a69a586d425965779d79adc6e20274fb1fb15b17245581b8b70ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
