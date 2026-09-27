export const name="lucid_2-locate-fixed";
export const id="dl_e7a6afbc6e4f4918a3a2";
export const url=new URL("../icons/lucid_2-locate-fixed.svg?v=d54f2248d2d82701dcd46fbc0a15e0989859f382c2109bd7c808ed7f1b51de30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
