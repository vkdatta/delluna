export const name="cross";
export const id="dl_ad560705d24148038be3";
export const url=new URL("../icons/cross.svg?v=34262999b95fcf49851391a30ccc857bffb85683146539f27e166a8e86764b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
