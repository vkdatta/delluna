export const name="arrow_back_2-fill";
export const id="dl_945d7c99fc247399a02d";
export const url=new URL("../icons/arrow_back_2-fill.svg?v=d2751b9f471f48db0d22deb27a480995c0a671eaa62f88f92a68f988f3034367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
