export const name="align_vertical_bottom-fill";
export const id="dl_24e11710c8d8bf29026e";
export const url=new URL("../icons/align_vertical_bottom-fill.svg?v=696250fc9d889f8ab1e85b34323b46705d9445a811e264fcd3877274fc62ba0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
