export const name="webcam-thin";
export const id="dl_34f8ce884e0a489585c0";
export const url=new URL("../icons/W/webcam-thin.svg?v=3cdb84ce1f19d8278767ded6aa4c38e9bf909cfc3d15814aab77596a6aca908d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
