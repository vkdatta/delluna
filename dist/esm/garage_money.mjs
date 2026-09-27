export const name="garage_money";
export const id="dl_724209e95c9059d13356";
export const url=new URL("../icons/garage_money.svg?v=1b7e90fd67b22bec5937c02997dd18dfb5eec4b5f01e52f262eec3491586e410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
