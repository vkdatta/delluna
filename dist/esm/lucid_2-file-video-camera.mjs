export const name="lucid_2-file-video-camera";
export const id="dl_f4fa5eea1f2940aabfc3";
export const url=new URL("../icons/lucid_2-file-video-camera.svg?v=7809c3b7d407be8296e223faaac66629218ec584e116d54cc6119ba541eb5aeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
