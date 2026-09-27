export const name="wave-sine-thin";
export const id="dl_bd922cc74d2bff9dc4d5";
export const url=new URL("../icons/wave-sine-thin.svg?v=83ef0fe598dbbfef6b5cfdded63083b9983609a454d137d4d22c89ee4da5d991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
