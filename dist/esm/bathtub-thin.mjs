export const name="bathtub-thin";
export const id="dl_a964920448d449ccae3c";
export const url=new URL("../icons/bathtub-thin.svg?v=1cc4d7297bd8b2732f5ab05a21f313b6e124f099e1d7d144db353cd6908566d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
