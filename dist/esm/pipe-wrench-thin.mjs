export const name="pipe-wrench-thin";
export const id="dl_4e0e81eb13984d3384b5";
export const url=new URL("../icons/pipe-wrench-thin.svg?v=c6a78318862c4c81827bcf831f92bbb5fbb78155be89eb3cd2f0b2597ba317e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
