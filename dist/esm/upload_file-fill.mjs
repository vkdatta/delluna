export const name="upload_file-fill";
export const id="dl_84ee487fe04379c40b99";
export const url=new URL("../icons/upload_file-fill.svg?v=daf1746374755b151552500ac53ead150b76c3be3547784d66229c4bcb0a4e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
