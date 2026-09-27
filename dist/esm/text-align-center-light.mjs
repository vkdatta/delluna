export const name="text-align-center-light";
export const id="dl_826436f4a00c277c669c";
export const url=new URL("../icons/text-align-center-light.svg?v=6e52aa77c921433392446278e7c8818a715d30cea9941311633c7efedc7a81ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
