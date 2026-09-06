export const name="broom-duotone";
export const id="dl_d37eb4914fab4f10ab1d";
export const url=new URL("../icons/broom-duotone.svg?v=6c9eb5de6e40c538e3e9c67fe438cbcd2d1caf5ee3f531e77ef2eb092049aae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
