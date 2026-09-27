export const name="hand-fist-thin";
export const id="dl_4e8969c5dca344e7b456";
export const url=new URL("../icons/hand-fist-thin.svg?v=4ee19100cf169d04b3aede51344113eebf405b7e490b4623c780c5862dab0c85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
