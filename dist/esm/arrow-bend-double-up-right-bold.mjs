export const name="arrow-bend-double-up-right-bold";
export const id="dl_5aeb848cc3bc4bef8a8d";
export const url=new URL("../icons/arrow-bend-double-up-right-bold.svg?v=0992c0333cbbf6cd636816e38b65e32bece7a1aa1e47a1c30d631d60d6b1c745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
