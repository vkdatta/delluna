export const name="nest_cam_floodlight-fill";
export const id="dl_074afd367ebe8aca8851";
export const url=new URL("../icons/nest_cam_floodlight-fill.svg?v=929b7b299bedfeb665b3a9794ac8fb0918025d94a9b0c83426dff6f702b58b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
