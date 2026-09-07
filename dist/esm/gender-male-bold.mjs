export const name="gender-male-bold";
export const id="dl_8a68811fe1a34d66acf5";
export const url=new URL("../icons/gender-male-bold.svg?v=29af7fee41a11129ce555dece9aa73a7036601ad6080c8787a2ccfbbec623135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
