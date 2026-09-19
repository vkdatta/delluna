export const name="chatgpt";
export const id="dl_f33d68c9487f44ae913d";
export const url=new URL("../icons/chatgpt.svg?v=b75d3fe89d7c0ba5aa6c7dc90fca1e383d27b0916fb2c74ad4a506c2105aa586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
