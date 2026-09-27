export const name="circles-four-thin";
export const id="dl_a5bf897835264e4fa562";
export const url=new URL("../icons/circles-four-thin.svg?v=fa614407d979408a71a3d7a540f452a43082761bf21f07415477ebea5688458a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
