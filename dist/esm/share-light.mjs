export const name="share-light";
export const id="dl_2c6ab52efcd32eef1c93";
export const url=new URL("../icons/share-light.svg?v=b7eead612c46724ebc1e36569b9fea2c8471f4d6148df175695bccae1b810bef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
