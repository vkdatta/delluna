export const name="moped-bold";
export const id="dl_e796528995a340ec856a";
export const url=new URL("../icons/moped-bold.svg?v=215fd835758bcdb061ea468d01420e1190367815800b7d58a31fcf4346d95903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
