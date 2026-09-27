export const name="baseball-cap-light";
export const id="dl_5776efb08fa74badaa24";
export const url=new URL("../icons/baseball-cap-light.svg?v=83833f086e8b5861dcc3c1b5b71ecfb1816bf7da7da0474f2d9651244be52e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
