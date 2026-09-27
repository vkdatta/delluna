export const name="file-video-duotone";
export const id="dl_beb73a7c878e4ca5bf34";
export const url=new URL("../icons/file-video-duotone.svg?v=3e778a28976d37d44ba3d7307e65a7831ac2287ce6d9f435d414d11a938ddb41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
