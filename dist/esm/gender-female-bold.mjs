export const name="gender-female-bold";
export const id="dl_b49db5e6906943d8b339";
export const url=new URL("../icons/gender-female-bold.svg?v=65168697595ac12d53e061ebfc9e7d755e477de5898caa1d6f79e801b20870cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
