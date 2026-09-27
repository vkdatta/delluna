export const name="arrow-circle-down-thin";
export const id="dl_d394fe1710cd4657b9e1";
export const url=new URL("../icons/arrow-circle-down-thin.svg?v=1aa8cda95e666bbd1c7a2e398d32a44e477e8b89aa04782abc742538b3d6ff9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
