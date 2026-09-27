export const name="hourglass-thin";
export const id="dl_473af89d795042a481eb";
export const url=new URL("../icons/hourglass-thin.svg?v=4dd70726d82b07e768f574a1ca1ca29407328f3637edaaacf4637cd55892c81c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
