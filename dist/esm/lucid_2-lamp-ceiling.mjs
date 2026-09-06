export const name="lucid_2-lamp-ceiling";
export const id="dl_74bcf9b73a1146d8b55b";
export const url=new URL("../icons/lucid_2-lamp-ceiling.svg?v=f955af9df3502a8bd5da3244171700ae532231f9ad59d252b66bc33dcea3a6f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
