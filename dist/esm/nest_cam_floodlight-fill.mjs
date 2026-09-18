export const name="nest_cam_floodlight-fill";
export const id="dl_91c929cc45fb4a68a300";
export const url=new URL("../icons/nest_cam_floodlight-fill.svg?v=0339274edda787635a68eeb822f419cfba607d8f81bef8d5d16127478a9463e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
