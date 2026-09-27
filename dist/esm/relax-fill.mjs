export const name="relax-fill";
export const id="dl_8a566452ba41fcdd4902";
export const url=new URL("../icons/relax-fill.svg?v=0bd027c58fffab4062e5501e26bdaa1d3e4c42247a88ad80d5fbfb93169adeef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
