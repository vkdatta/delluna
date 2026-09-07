export const name="file-md";
export const id="dl_12098c4b11a7444eae55";
export const url=new URL("../icons/file-md.svg?v=14a9b9a4bc7767ad04b1f9140cbaf7b5c477b0f8824967a45d6a43a8150a1c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
