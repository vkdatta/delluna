export const name="hand-swipe-right-fill";
export const id="dl_28a218de52144794b925";
export const url=new URL("../icons/hand-swipe-right-fill.svg?v=acd6864226c4f4a32e258b24053678e4d77395f8b1ba0f1779e5489425a9a9b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
