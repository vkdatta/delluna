export const name="arrow-circle-down-thin";
export const id="dl_d394fe1710cd4657b9e1";
export const url=new URL("../icons/arrow-circle-down-thin.svg?v=a5650d0c56d024a1df345666eab8cb702b945d599786d4f7757a7e2e3a30bcd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
