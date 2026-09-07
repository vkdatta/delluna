export const name="number-square-eight-thin";
export const id="dl_55d552a1950142f79ead";
export const url=new URL("../icons/number-square-eight-thin.svg?v=c196ba4ca722b8b73cd55abfce2307b2a3455774526baae9fd05ce06c6559433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
