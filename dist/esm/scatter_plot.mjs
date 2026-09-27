export const name="scatter_plot";
export const id="dl_0c66c42c6411385ced3c";
export const url=new URL("../icons/scatter_plot.svg?v=daa4a881ddb60e4948a4c67f07a43dfaaa6a9c76ae72333dbee6ad2c3c74e0fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
