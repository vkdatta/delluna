export const name="coffee-thin";
export const id="dl_e48c35d5161c456394b9";
export const url=new URL("../icons/coffee-thin.svg?v=7dad8bd95359e24b8ae0cc9fc6e55dd0afb050c9796263c0dd0159e19a0b459f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
