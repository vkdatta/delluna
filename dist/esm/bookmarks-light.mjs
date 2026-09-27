export const name="bookmarks-light";
export const id="dl_34fd7fe962a14d40b67c";
export const url=new URL("../icons/bookmarks-light.svg?v=a6b1761cf4543ba19411c6ee4aabcd2d6a320b1699ba3c7e88d951f1fd79719b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
