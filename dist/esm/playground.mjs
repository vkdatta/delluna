export const name="playground";
export const id="dl_7afcec88fb8203efcb06";
export const url=new URL("../icons/playground.svg?v=ce4fdd514c343c3d3b866ee5a92a203b6690fc26076f7f1d0ac744bd8339cca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
