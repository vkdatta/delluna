export const name="battery-medium";
export const id="dl_70e6429680ef4cacaa91";
export const url=new URL("../icons/battery-medium.svg?v=e600a5fc606bf31be5a48d885b9cbb79edc754649aa7b1c79bbedd30a11c583d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
