export const name="speaker-low-light";
export const id="dl_ed20c1385e061b2678a4";
export const url=new URL("../icons/speaker-low-light.svg?v=07a03093302cfe519fb19e8790dc9ee2b358ac2cf725d117e924949e753121f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
