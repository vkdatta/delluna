export const name="fit_screen";
export const id="dl_401d4514b023b6417834";
export const url=new URL("../icons/fit_screen.svg?v=1c9084022369dec518348772319a79c1180ba63a3901bbc733e0b7dbafab8107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
