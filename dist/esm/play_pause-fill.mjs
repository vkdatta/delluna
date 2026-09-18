export const name="play_pause-fill";
export const id="dl_6c6d9274f3194653b110";
export const url=new URL("../icons/play_pause-fill.svg?v=2f46f688e9b1fd21105791c2687d6abcf95895801a4e1820b39545d5492aab45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
