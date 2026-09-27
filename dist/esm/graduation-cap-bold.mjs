export const name="graduation-cap-bold";
export const id="dl_896c8f76e59a409b8811";
export const url=new URL("../icons/graduation-cap-bold.svg?v=3ececf1edfa7dd9bd0aa9c5533233132208be70ac97cb391496cedce9538b6d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
