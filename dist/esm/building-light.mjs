export const name="building-light";
export const id="dl_9c39eee6391e42a0a579";
export const url=new URL("../icons/building-light.svg?v=f711be80f839a4dec696ee8be86b75648a2bce07190dc4f999fe6248fca6a22e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
