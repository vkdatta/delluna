export const name="chalkboard-simple";
export const id="dl_3bfb96946e654cfe8120";
export const url=new URL("../icons/chalkboard-simple.svg?v=f81cf370ff19644e2526a4058963de41a40236dd18ac71460714bfd69ff5a60f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
