export const name="keyboard-light";
export const id="dl_c746794866904e098343";
export const url=new URL("../icons/keyboard-light.svg?v=33d4f70aa38f89039716cae174edc30a33e5e80dd4cd17718f9f8db90f8f40b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
