export const name="number-circle-five-thin";
export const id="dl_476c2ce481464fd5b63e";
export const url=new URL("../icons/number-circle-five-thin.svg?v=0bf90fba5a947e1dd38a8e953f32427168659dfe9a3e835361a45c30890382fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
