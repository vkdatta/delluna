export const name="clipboard-text-thin";
export const id="dl_4031d8dfdb954832852e";
export const url=new URL("../icons/clipboard-text-thin.svg?v=bc00aa244b24a62ac944421275b686b33f36ce858981dafd4cfce387be0f591e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
