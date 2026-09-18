export const name="sentiment_content-fill";
export const id="dl_ae907a4dd0a443889754";
export const url=new URL("../icons/S/sentiment_content-fill.svg?v=883def3aa404defa41bd1dd213686eaa5b6e1bc9078b9c691bec718a55e51b16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
