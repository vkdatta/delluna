export const name="caret-line-left-bold";
export const id="dl_712fc590aaba4cd3a922";
export const url=new URL("../icons/caret-line-left-bold.svg?v=93096edb731a0136544ded1680da444286b771668ff55c7e7abe26803151ed3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
