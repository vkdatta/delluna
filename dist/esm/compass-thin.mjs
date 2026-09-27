export const name="compass-thin";
export const id="dl_017729f9b50745b3b068";
export const url=new URL("../icons/compass-thin.svg?v=785abbab0eba2d7d81394c3e94898e593fef92821128971ea895223730f03a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
