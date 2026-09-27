export const name="crown-thin";
export const id="dl_52d08d2fc8924f9995ae";
export const url=new URL("../icons/crown-thin.svg?v=bec695553d8763a29cd07351935178ec35250e05bbe497f558de7e7e00474d56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
