export const name="game_stick_l3";
export const id="dl_bdf3d4e2ebb440e1f168";
export const url=new URL("../icons/game_stick_l3.svg?v=592d46b925cb14b2cf85a638044226d680067c3e77d73379157a37837852ff63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
