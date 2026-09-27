export const name="swipe_left";
export const id="dl_e06a72283c6800179a51";
export const url=new URL("../icons/swipe_left.svg?v=2754ad4263f907cb6260767cd8a33d61acdb412f145108f1f9ffa8370fddcfab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
