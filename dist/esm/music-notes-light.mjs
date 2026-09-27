export const name="music-notes-light";
export const id="dl_e90759fdc8a24ced94e3";
export const url=new URL("../icons/music-notes-light.svg?v=978397693491d42e81e1a878aba398e5a29dcf096c74f38b66a513f37d666375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
