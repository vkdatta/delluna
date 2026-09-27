export const name="battery-medium-bold";
export const id="dl_550ed7df7dd34d6cbb2a";
export const url=new URL("../icons/battery-medium-bold.svg?v=f0201752b95756e21d137c2cc594380416fcfed9775021197942e657fc14acc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
