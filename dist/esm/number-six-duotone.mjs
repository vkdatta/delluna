export const name="number-six-duotone";
export const id="dl_3e01aee0e6e04775bf82";
export const url=new URL("../icons/number-six-duotone.svg?v=6cab2925ee2da1e392cf0dadc8e3f4b0afc9a74a6dbc3827ebe4d0c76c70880f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
