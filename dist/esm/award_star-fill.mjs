export const name="award_star-fill";
export const id="dl_4944dd42f448bd0ad6fd";
export const url=new URL("../icons/award_star-fill.svg?v=6cf6ddb60c4c0df972f6ed737773f64de2864f005d0c4563fde2219cfa53727e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
