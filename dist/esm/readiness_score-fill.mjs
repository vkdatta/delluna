export const name="readiness_score-fill";
export const id="dl_4a1950701c42401b9286";
export const url=new URL("../icons/R/readiness_score-fill.svg?v=06fcf09829af6dd6aa55ff8c63a64f7229d5165a8cb24ea41f1c3aa5e3eadc90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
