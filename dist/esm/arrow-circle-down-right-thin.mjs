export const name="arrow-circle-down-right-thin";
export const id="dl_d6166a3e88e94d84aee2";
export const url=new URL("../icons/arrow-circle-down-right-thin.svg?v=920abe4255d544895a8be939e074217f99ff56f3305008082ef8066b318f574a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
