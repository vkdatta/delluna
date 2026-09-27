export const name="video_file-fill";
export const id="dl_332cd7ab2ad33d29e788";
export const url=new URL("../icons/video_file-fill.svg?v=3fd7a9aef3ea9887a767b3c5ba1ce1eaed254206dc1de957bb4ef7be244785a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
