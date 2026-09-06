export const name="number-square-eight-bold";
export const id="dl_57a5b9ac347146d3bc42";
export const url=new URL("../icons/number-square-eight-bold.svg?v=8d56c7f97324b7a46764453f665d9d793e6664092e2687968cfdd8867543909a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
