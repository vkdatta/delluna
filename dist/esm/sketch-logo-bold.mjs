export const name="sketch-logo-bold";
export const id="dl_51ac75212002a920dd0b";
export const url=new URL("../icons/sketch-logo-bold.svg?v=d014892ee7b17fbe3c81768ec024eda1ba4d899daa44546b08c9f1ecbc6327e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
