export const name="spinner-thin";
export const id="dl_8b37d69d85e01d00e247";
export const url=new URL("../icons/spinner-thin.svg?v=dc4d3ed6feda16be92e8e54c36d758fd941f1771abbbb631633031f694adec45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
