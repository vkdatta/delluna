export const name="back_hand";
export const id="dl_77485312710d499a86f9";
export const url=new URL("../icons/B/back_hand.svg?v=e5be1049e6a7f76e1dae2852e7367438ba02a5895d5b8c3c4df3c810d55038f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
