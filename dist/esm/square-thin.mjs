export const name="square-thin";
export const id="dl_11bb488d4518b9d96e06";
export const url=new URL("../icons/square-thin.svg?v=3210f55bba3d75512ff76bbf70d67bfc0178343bfa70a094ccb8c7a6de57cf49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
