export const name="video_file";
export const id="dl_564974d17c3d0875de55";
export const url=new URL("../icons/video_file.svg?v=4f35aa8e6c0468a69e53780ac8f62062178816689b0236e6056a30f9da318f78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
