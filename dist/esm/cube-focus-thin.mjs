export const name="cube-focus-thin";
export const id="dl_de39a21d7d254ed7bce0";
export const url=new URL("../icons/cube-focus-thin.svg?v=697c64be5b2a73de76ab89204ecd4edcb838078620433ae53a87a1734f2b4135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
