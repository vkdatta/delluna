export const name="file-svg-bold";
export const id="dl_649ad8b9092d42c691d0";
export const url=new URL("../icons/file-svg-bold.svg?v=4167e8fa77947bc316489ea6ebdf44a8cbf9014d653b6a0fab8e9c4c4971a372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
