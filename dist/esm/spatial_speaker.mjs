export const name="spatial_speaker";
export const id="dl_b5af9922bbc99ce218c6";
export const url=new URL("../icons/spatial_speaker.svg?v=acafb0e9beb71c1e3510bec27d14ec49e09253c52bdaca0aba2e155c736ba67f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
