export const name="webcam-thin";
export const id="dl_2838f2a5e46a3dc498e6";
export const url=new URL("../icons/webcam-thin.svg?v=7f87dc50c122e7ee51831c8ecd568e264fa63d1bdd7dcc6605f962ba173da5c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
