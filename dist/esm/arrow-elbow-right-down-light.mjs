export const name="arrow-elbow-right-down-light";
export const id="dl_574cf7c990fe4631abc4";
export const url=new URL("../icons/arrow-elbow-right-down-light.svg?v=270056f4123455a83ce42dce944f26f7054710ced1bff4700dd923bd77a8cf71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
