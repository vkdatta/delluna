export const name="pill_off";
export const id="dl_20f6d4c696fb2dc597df";
export const url=new URL("../icons/pill_off.svg?v=13a088e0104af08e864736538dd0aff8456dcc80c301694b71b768990a2a7fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
