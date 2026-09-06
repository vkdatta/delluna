export const name="rows-thin";
export const id="dl_25694c8671214ea6b848";
export const url=new URL("../icons/rows-thin.svg?v=95555a8982aa6da4fe5e217f866cbde8f38bfa62b4bcab567285c4dd3dca2e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
