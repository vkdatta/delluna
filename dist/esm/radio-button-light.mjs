export const name="radio-button-light";
export const id="dl_60243e86d573499a9b36";
export const url=new URL("../icons/radio-button-light.svg?v=b03a1eda2ebcd85a00e7997216c5da9f7a3f5bcc0caa8ac624c67fa144d75a76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
