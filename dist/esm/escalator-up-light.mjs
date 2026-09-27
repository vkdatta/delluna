export const name="escalator-up-light";
export const id="dl_36d96eccf334441f91e1";
export const url=new URL("../icons/escalator-up-light.svg?v=03463dd6b9ad72937edc921c27adfc020c73b7481a99560f7ccb6b1ff6dde757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
