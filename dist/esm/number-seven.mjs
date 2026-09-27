export const name="number-seven";
export const id="dl_8ec0f672134745b4b106";
export const url=new URL("../icons/number-seven.svg?v=59cbebe52912ae78049a28826539e4c6980403cea7585e4bcc49d6e43b246acf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
