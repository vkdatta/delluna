export const name="baby-carriage-thin";
export const id="dl_f2acebe7931848d0b333";
export const url=new URL("../icons/baby-carriage-thin.svg?v=2072f4dc860016db7282f08f59cdafd285e3d0c7264a71664152ac97681bcfae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
