export const name="lightbulb_circle-fill";
export const id="dl_9433cf770aac4bb8aac2";
export const url=new URL("../icons/lightbulb_circle-fill.svg?v=8958028ebe62a5b86d65a2c33bbdd5202c062866e70db8680ece5f336622b63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
