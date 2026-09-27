export const name="pulse-thin";
export const id="dl_3b323cd694de43bf8efe";
export const url=new URL("../icons/pulse-thin.svg?v=815a6781076d6f6f2f98bd9ed781e34dd583356a2259299c9532e8c34d9698d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
