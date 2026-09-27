export const name="dots-three-circle-thin";
export const id="dl_072855fd285b46c99fd1";
export const url=new URL("../icons/dots-three-circle-thin.svg?v=0453d74510c345323086f13a25e21840987383b43ea6307e56d1ea086fd7fe0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
