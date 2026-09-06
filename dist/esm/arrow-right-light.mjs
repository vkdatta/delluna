export const name="arrow-right-light";
export const id="dl_e34980debca043f6a3b1";
export const url=new URL("../icons/arrow-right-light.svg?v=546e2ebfd0cae821c9a192ef8169eac2f1944688a373e3cb158316c311ca773a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
