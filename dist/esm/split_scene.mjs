export const name="split_scene";
export const id="dl_bd88c50af4c841fa98c0";
export const url=new URL("../icons/split_scene.svg?v=d086455ad3bad4ec1834fe37a35f8d1c21d14077823cc51450e6a336c354adec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
