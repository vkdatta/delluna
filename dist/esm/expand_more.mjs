export const name="expand_more";
export const id="dl_9cf7cf04081bc4c2d897";
export const url=new URL("../icons/expand_more.svg?v=f9dcf43bec5870a95d550ecef71b81a62e0271dfe6b20d4f4b887acf7576eb3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
