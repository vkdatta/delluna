export const name="17mp-fill";
export const id="dl_de9c36000d77c4464287";
export const url=new URL("../icons/17mp-fill.svg?v=fcbc3976b5233a54b46f0c19608e967e2a46f1f391cfe1fcfb79e644e8ebde26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
