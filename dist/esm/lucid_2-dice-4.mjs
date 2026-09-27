export const name="lucid_2-dice-4";
export const id="dl_d6035fa417e343489677";
export const url=new URL("../icons/lucid_2-dice-4.svg?v=ec1b209a04ec95162409da3151f927c985ebace7736b2cca8c59aca238296540",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
