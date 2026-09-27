export const name="hourglass_arrow_up";
export const id="dl_4d75e10cc782cee56859";
export const url=new URL("../icons/hourglass_arrow_up.svg?v=1bd3195c2495dbbcffbd5ff5903c27dfa983c809fcf6dec2f1336bbe9938bf94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
