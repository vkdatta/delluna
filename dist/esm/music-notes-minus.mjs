export const name="music-notes-minus";
export const id="dl_4fd21969d83c4c1dac7f";
export const url=new URL("../icons/music-notes-minus.svg?v=a5715efe862081476e2eea649c65277200d176f262d0c5446ad0cdadd0d2cbbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
