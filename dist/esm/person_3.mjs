export const name="person_3";
export const id="dl_fc9676aa37c09abf3155";
export const url=new URL("../icons/person_3.svg?v=3c14f16da1021a7074fa1ddd0f294a68e4e876bf0728b79457a1de6c74ca70e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
