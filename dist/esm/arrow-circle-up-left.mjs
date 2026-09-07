export const name="arrow-circle-up-left";
export const id="dl_964419c527974f21942c";
export const url=new URL("../icons/arrow-circle-up-left.svg?v=011c6f58c2ea56463acc696ca2ba0b9f5a60e50c32e3041c70ca137a2fb404be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
