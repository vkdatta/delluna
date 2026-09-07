export const name="hourglass-simple-thin";
export const id="dl_4bc2ebdd14fe498dbd9f";
export const url=new URL("../icons/hourglass-simple-thin.svg?v=e9bae892c77dd3d9ec55bb10008fe6367c088691c8fce205bb58afc77e0bc60a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
