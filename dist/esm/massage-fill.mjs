export const name="massage-fill";
export const id="dl_5b280ab3af7f48b48ba8";
export const url=new URL("../icons/M/massage-fill.svg?v=8c2d212332d3251b12d14a1d819bbfc5d85ce4e059ffbfbc02ffe58234320846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
