export const name="sliders";
export const id="dl_6f87b7ccb9412c1c0bf5";
export const url=new URL("../icons/sliders.svg?v=0d02cd271c4de1e6b3d830290ecf1e2bbafc648b0f66eeb3516f21f332f96a1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
