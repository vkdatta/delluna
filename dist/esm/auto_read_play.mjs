export const name="auto_read_play";
export const id="dl_838bebd8e0ccd0073338";
export const url=new URL("../icons/auto_read_play.svg?v=afd78d3b3d4e9097395378c6ae8dac77129d0bba414f7ecd54fd91b99750e0c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
