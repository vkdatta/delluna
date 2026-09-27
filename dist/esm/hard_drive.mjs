export const name="hard_drive";
export const id="dl_2a2fd1bf814de0f38ea8";
export const url=new URL("../icons/hard_drive.svg?v=2984b914be0e1038293bbba83eb45a4ac4f3988cdcf758fc9f5d7108291a39ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
