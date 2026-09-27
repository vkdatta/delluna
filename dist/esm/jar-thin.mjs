export const name="jar-thin";
export const id="dl_e870474ff33f4f229aa9";
export const url=new URL("../icons/jar-thin.svg?v=c5b7c26b1b34e62ec04e7c5201eca4591b87b4c14bd1d2feb53a1bca339aa0bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
