export const name="browser-thin";
export const id="dl_fbdbd84e1f4349b081d2";
export const url=new URL("../icons/browser-thin.svg?v=6b2e37da77d431752dfefd2c3d44adfc8119b5e35ca31c5670a0d2e996d345db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
