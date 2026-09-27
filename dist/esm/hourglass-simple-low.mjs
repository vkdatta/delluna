export const name="hourglass-simple-low";
export const id="dl_debbff1ca68d4dc68f37";
export const url=new URL("../icons/hourglass-simple-low.svg?v=ed89288139fd5d48cc82fbfe6f6b27272595c22705a66e4761c0d4552d2fc3dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
