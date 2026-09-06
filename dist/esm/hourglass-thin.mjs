export const name="hourglass-thin";
export const id="dl_473af89d795042a481eb";
export const url=new URL("../icons/hourglass-thin.svg?v=865b276790339944c252d156506026db9dbf3ee1d4d1d4c40e68bde5ea992667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
