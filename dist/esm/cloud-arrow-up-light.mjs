export const name="cloud-arrow-up-light";
export const id="dl_49d11861b51a4317b58e";
export const url=new URL("../icons/cloud-arrow-up-light.svg?v=8a87b62458a9048567fe04eb97ab3531c0a9f24ea61c982c472224fa1494fb12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
