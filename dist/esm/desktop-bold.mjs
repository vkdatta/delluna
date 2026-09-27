export const name="desktop-bold";
export const id="dl_83ce61ffb6c344e59cd8";
export const url=new URL("../icons/desktop-bold.svg?v=0a66c4d1ecf4eb5490208d20894ae91c2856e0d028ef2d56caeb7b08b778c842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
