export const name="spa-fill";
export const id="dl_8771b4bbd8bbd257d3b8";
export const url=new URL("../icons/spa-fill.svg?v=9ff998e642e53d35c10c7629466d753d2afd77d6cfc6f8f0f97e1ab1ef7b4b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
