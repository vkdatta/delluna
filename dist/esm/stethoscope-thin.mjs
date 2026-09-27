export const name="stethoscope-thin";
export const id="dl_1bc05fdda30c5d89a5bf";
export const url=new URL("../icons/stethoscope-thin.svg?v=0c15a9666615f388adc041f30feda67f79aec743c89ccf985fcb6caa16607b25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
