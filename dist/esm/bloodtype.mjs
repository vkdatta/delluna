export const name="bloodtype";
export const id="dl_33461d208b9a1b8c5169";
export const url=new URL("../icons/bloodtype.svg?v=f1debb7f543c12070235c0d39c680a4c04e3ba8a43f4ce808e210c0f911dc586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
