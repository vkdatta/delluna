export const name="clock-counter-clockwise-thin";
export const id="dl_52987e9bf6dd4963a0d4";
export const url=new URL("../icons/clock-counter-clockwise-thin.svg?v=710cef6f5886933e3f51de7bbea8971db635fe50b6de18ba1322d8622ae3c893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
