export const name="pill_off";
export const id="dl_58a854e398d241d0b0d4";
export const url=new URL("../icons/pill_off.svg?v=13a088e0104af08e864736538dd0aff8456dcc80c301694b71b768990a2a7fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
