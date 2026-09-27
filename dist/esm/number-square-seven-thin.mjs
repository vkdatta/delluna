export const name="number-square-seven-thin";
export const id="dl_a994456c56cc4339a433";
export const url=new URL("../icons/number-square-seven-thin.svg?v=2663e1c1416c05ea1b19841238092ceb3a9fdc90d14041bc762111ba6baf0589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
