export const name="function-thin";
export const id="dl_bb5df4d82a2b4d46949a";
export const url=new URL("../icons/function-thin.svg?v=de8eb167bae2ee24516c9fee4506e14e781b2867b2fa5fd89a6e775c674fef46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
