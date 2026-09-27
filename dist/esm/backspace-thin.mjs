export const name="backspace-thin";
export const id="dl_913d5af5aa864111850a";
export const url=new URL("../icons/backspace-thin.svg?v=08b1d5d9ed9772b683d236e7a4152fc7c9d0016d797df81f7f199217786ab6ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
