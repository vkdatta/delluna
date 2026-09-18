export const name="wand_stars";
export const id="dl_fc82d6b7e7774dc896de";
export const url=new URL("../icons/W/wand_stars.svg?v=4c331185a5bf141ec3f29bbed994a128cfc9dc6c68f92a65185bb8a0ed8eeb0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
