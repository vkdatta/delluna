export const name="arrow-line-down-left-fill";
export const id="dl_c52070c60c0f46a3a4a1";
export const url=new URL("../icons/arrow-line-down-left-fill.svg?v=2e7c6039516d45a39448dd47def487b221060743db0bdc7751c7fe586d93df11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
