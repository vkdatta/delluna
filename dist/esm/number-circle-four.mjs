export const name="number-circle-four";
export const id="dl_8916af42dceb4e4eb5b9";
export const url=new URL("../icons/number-circle-four.svg?v=42dde58b0e6b5f1f03ee94474338031d0284840c0a8eff64315499747a40dad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
