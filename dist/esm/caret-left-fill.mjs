export const name="caret-left-fill";
export const id="dl_3f65dc82792f454493fb";
export const url=new URL("../icons/caret-left-fill.svg?v=a6300d93ee3016043fe02af787421093bedd301a0da992337d07b16404e65fa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
