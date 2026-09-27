export const name="weekend";
export const id="dl_d50831bc15fdf376794b";
export const url=new URL("../icons/weekend.svg?v=09d14a9c1c1d1a43040bdb3fc0fa3745943bb8f230dab348d49a3d78aebd8027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
