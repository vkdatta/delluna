export const name="speedometer-thin";
export const id="dl_95331d07b72e1a6afe55";
export const url=new URL("../icons/speedometer-thin.svg?v=50225153295e4467b90431a1100eff94b74d8c945536f01bf0925ab9313814be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
