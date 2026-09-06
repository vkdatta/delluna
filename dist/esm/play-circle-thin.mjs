export const name="play-circle-thin";
export const id="dl_597cb935d880479d9ca1";
export const url=new URL("../icons/play-circle-thin.svg?v=17b80572d603ded98786b77ecfdf3a9338f50b801d7e75aa4739b67c9c077cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
