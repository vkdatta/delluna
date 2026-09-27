export const name="cards_stack-fill";
export const id="dl_39eae0dc54c4ce843dc4";
export const url=new URL("../icons/cards_stack-fill.svg?v=84ba2948863f339a4ce81f34e5424274095698fd50105ff2ff181b3eb02bf299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
