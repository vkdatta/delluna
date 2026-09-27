export const name="video_label";
export const id="dl_a322eb4f589581d7349b";
export const url=new URL("../icons/video_label.svg?v=61a3855b7d0bf2e37d45eb43179319576549915cf40d4c5a39b07aa85214bb8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
