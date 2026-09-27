export const name="train-simple-light";
export const id="dl_b71f38be67069e7384e7";
export const url=new URL("../icons/train-simple-light.svg?v=8792ee3b80971a0786c883a8bb26bb588c1aed6a7b3e788511511ffcabaf095e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
