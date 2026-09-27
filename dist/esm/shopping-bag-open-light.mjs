export const name="shopping-bag-open-light";
export const id="dl_76c90b76354d04138ffa";
export const url=new URL("../icons/shopping-bag-open-light.svg?v=045934257eecab5bf84c492037024c666fe3c1087b23a121adfcaaea60da00a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
