export const name="lab_panel-fill";
export const id="dl_e48654d86cd62d5f4eed";
export const url=new URL("../icons/lab_panel-fill.svg?v=fc4200c73bf0e8a2ba889efb3ef285b756691d8190082dd4f7f4e5d076d49cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
