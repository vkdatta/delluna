export const name="cloud-x-duotone";
export const id="dl_59cebec58fa34b229881";
export const url=new URL("../icons/cloud-x-duotone.svg?v=eaed2d3fe170a439721836a8f60d4655f4cecadf9a913701381608d5b122c181",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
