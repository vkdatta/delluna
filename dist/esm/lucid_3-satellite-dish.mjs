export const name="lucid_3-satellite-dish";
export const id="dl_86c47c89e43a465cb48d";
export const url=new URL("../icons/lucid_3-satellite-dish.svg?v=dafcde9a6e0cd6fe68cd6a91ecd986be6f7fb0d5aa734ee66ecdb0b35c35f426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
