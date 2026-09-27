export const name="plugs-connected-thin";
export const id="dl_307a418589dd4644be06";
export const url=new URL("../icons/plugs-connected-thin.svg?v=f15d64d41a633535711c726924b3f31e33139da582dd60ce3a1a49bbb693c0f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
