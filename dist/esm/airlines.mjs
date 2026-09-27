export const name="airlines";
export const id="dl_5b958776340d4abd1de6";
export const url=new URL("../icons/airlines.svg?v=734f69a2ebc07423aa242437a04751f681226cde41899665b90068015614b7a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
