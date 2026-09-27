export const name="square-round-corner";
export const id="dl_4b8c8241e6884bdd843d";
export const url=new URL("../icons/square-round-corner.svg?v=bb210fcad291181f2c214c2b758e5dfe252576fbbbbc29be8dad4ed7590365b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
