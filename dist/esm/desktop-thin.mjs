export const name="desktop-thin";
export const id="dl_b013a2bd1406482787ad";
export const url=new URL("../icons/desktop-thin.svg?v=2af8a766985e143114559df72c7944c6f6e6845e87063a708e8c4e302c8a44cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
