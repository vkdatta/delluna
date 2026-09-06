export const name="elevator-thin";
export const id="dl_2f5494bd0fd249a7a9fc";
export const url=new URL("../icons/elevator-thin.svg?v=1df44fb97a02abadc5113886e224896c2fae488e45cdefd90abca4f779ccf706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
