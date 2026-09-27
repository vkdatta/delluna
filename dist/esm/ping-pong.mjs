export const name="ping-pong";
export const id="dl_92e3b40c129844008197";
export const url=new URL("../icons/ping-pong.svg?v=f040511f13d42a0541ae15e2d648bb9623e40c4a00cf831edfaab44f3bb65e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
