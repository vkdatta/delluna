export const name="wb_iridescent";
export const id="dl_cd10d9b8c9706875ef0c";
export const url=new URL("../icons/wb_iridescent.svg?v=91ac4720eb12784c0c76c4cf96a006958dfbe8372437a42c523e25e7b077f6db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
