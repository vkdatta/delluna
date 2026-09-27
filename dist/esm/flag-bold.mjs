export const name="flag-bold";
export const id="dl_866ee4a04e9a4dfb9429";
export const url=new URL("../icons/flag-bold.svg?v=ca0f81c208c0f676c1413618e74d5ce9da422923d1d48e724a339fdbcf03f8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
