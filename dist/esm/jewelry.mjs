export const name="jewelry";
export const id="dl_c0c7ed6265cbe6527f89";
export const url=new URL("../icons/jewelry.svg?v=32f06ea4e6e5978616da38f69f62da5e716b9ee6b65640c2292f1ec6c469ad51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
