export const name="microphone-thin";
export const id="dl_6046c539b048428dbbd5";
export const url=new URL("../icons/microphone-thin.svg?v=dfc4390f95dd9f3311e0b2d9c2920c443dcfb3d8346de2ea623cd75adc98d1bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
