export const name="2k";
export const id="dl_5ae986459b8f83504eb3";
export const url=new URL("../icons/2k.svg?v=47f5b31437b6add88c0f34cb72df697e07d0b9cd4862a2d59a5189679b490765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
