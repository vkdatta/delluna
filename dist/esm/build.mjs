export const name="build";
export const id="dl_b1a953223b1b78cfbe25";
export const url=new URL("../icons/build.svg?v=5679be50b3daf3b24fcb7407a11d2040f6751c7b226fb23f39bd5702d06ec483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
