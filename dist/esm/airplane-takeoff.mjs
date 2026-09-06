export const name="airplane-takeoff";
export const id="dl_8045f0082de3462bb066";
export const url=new URL("../icons/airplane-takeoff.svg?v=2dfcdeed69dfa283d92809bc25048ea3572dce7c0a8c7c2e71008d9ad42c0bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
