export const name="face";
export const id="dl_49ed00d0f7a10d8c6f8b";
export const url=new URL("../icons/face.svg?v=418235f0c6fff965f05f41e3191cfbef8900bb80859b9db8f140654ca9e85aff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
