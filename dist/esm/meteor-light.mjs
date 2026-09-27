export const name="meteor-light";
export const id="dl_89da0554414c4fa1834c";
export const url=new URL("../icons/meteor-light.svg?v=06836ddf30effd9056fb41dfc7cc109bb42c5a342e331a4c9ec50b7694e01dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
