export const name="nuclear-plant-thin";
export const id="dl_e8f8eda19b624663959f";
export const url=new URL("../icons/nuclear-plant-thin.svg?v=57f1761a88f9109646b844997454385d952ca6f212f009757d93e76cf3452ec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
