export const name="church-fill";
export const id="dl_6b6f0b074584041c58f3";
export const url=new URL("../icons/church-fill.svg?v=353998557aecafd8bbc6dffa4548c26df9ca8725b6a01dacb7a14f21fcc70650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
