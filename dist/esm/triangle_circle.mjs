export const name="triangle_circle";
export const id="dl_56afc323f4a2824706f1";
export const url=new URL("../icons/triangle_circle.svg?v=62b0a165aed95cd5aa8ef305322eb8acb9f6e21d1508f89f119a12a217b17057",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
