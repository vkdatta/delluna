export const name="carry_on_bag";
export const id="dl_ae5e88c2620b0109702b";
export const url=new URL("../icons/carry_on_bag.svg?v=f04f47d0b393eaed47a9c1758e4200ec7b482b86788a67dd77d07ef8fb7851f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
