export const name="stop_screen_share";
export const id="dl_24b9ddff215552d1fd79";
export const url=new URL("../icons/stop_screen_share.svg?v=c1b14acc2ed8760c6b81ba7a9485b5e7d8f2bf3d0e7a246012bc9d3a553c7098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
