export const name="codepen-logo-bold";
export const id="dl_5a90f9eb0c0a4d0b9559";
export const url=new URL("../icons/codepen-logo-bold.svg?v=ecdf398db2f09465e483680b6f45910834d7f79f648ee7b78242228b926986f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
