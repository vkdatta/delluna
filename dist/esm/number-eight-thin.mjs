export const name="number-eight-thin";
export const id="dl_47f9441380f241ccbdd0";
export const url=new URL("../icons/number-eight-thin.svg?v=03d7e0215495e0e2b693a6c15461e4a872177ab04fa1b92c7af32aba9538d10e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
