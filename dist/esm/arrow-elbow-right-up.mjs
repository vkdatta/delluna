export const name="arrow-elbow-right-up";
export const id="dl_badb54b4c740421eb70b";
export const url=new URL("../icons/arrow-elbow-right-up.svg?v=101b0953a4628399b4c10df6c9a7582dd4414806d941ea1e1109a76e6544d344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
