export const name="textbox-light";
export const id="dl_a202541ec8a6f547923f";
export const url=new URL("../icons/textbox-light.svg?v=b226cad338c3337835046f69228294b9ef3a764eb6e1ae4069306cdb8c482cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
