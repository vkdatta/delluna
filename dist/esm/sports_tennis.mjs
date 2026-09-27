export const name="sports_tennis";
export const id="dl_d5ece2fb4c06e408b37e";
export const url=new URL("../icons/sports_tennis.svg?v=b615ec57d5206f4426c99ac67a5c192e8e00c08b65f2751c48da862d419c4984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
