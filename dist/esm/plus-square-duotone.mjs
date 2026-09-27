export const name="plus-square-duotone";
export const id="dl_8c54768d52ea4e2a8564";
export const url=new URL("../icons/plus-square-duotone.svg?v=a2bfe0e60c19884813fe810193339ba31c3a0bbc90a44d13bb7202e2ab667244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
