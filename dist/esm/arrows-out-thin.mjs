export const name="arrows-out-thin";
export const id="dl_bf35b38d3bdd4323ae92";
export const url=new URL("../icons/arrows-out-thin.svg?v=c9b0f743619595299a92d47a4ca97d785234e1503a062c53c7f1611ffd07e368",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
