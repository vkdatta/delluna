export const name="video_chat-fill";
export const id="dl_33601171a767c4be21f1";
export const url=new URL("../icons/video_chat-fill.svg?v=da4a86f3e56d0dd0b187fd40d9c3848694dc040efbd3d626fa89ec2b07518eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
