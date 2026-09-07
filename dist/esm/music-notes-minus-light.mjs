export const name="music-notes-minus-light";
export const id="dl_55bde10137b24b3ea01f";
export const url=new URL("../icons/music-notes-minus-light.svg?v=b17e6489422b9932738286fdd09eb88a5523185121df5f737086b010afe32bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
