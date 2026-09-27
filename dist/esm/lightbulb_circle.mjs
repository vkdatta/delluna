export const name="lightbulb_circle";
export const id="dl_a1cc9ff675c2117d2128";
export const url=new URL("../icons/lightbulb_circle.svg?v=77aab54f0255b11d0d1c4b0f737c16ea878dbdc663167d5b340e442539b04a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
