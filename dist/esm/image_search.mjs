export const name="image_search";
export const id="dl_2f87117ebc589a5834b6";
export const url=new URL("../icons/image_search.svg?v=c55008bbc3fb594de0e47678de6fc35f25d885daf24b20d266fe70667db5cec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
