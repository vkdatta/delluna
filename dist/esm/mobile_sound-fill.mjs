export const name="mobile_sound-fill";
export const id="dl_b58480bfb97d5bae8346";
export const url=new URL("../icons/mobile_sound-fill.svg?v=8669b520e628e13255197fa12bee86bbcd29964c2f23198c9b887fa0de40ddab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
