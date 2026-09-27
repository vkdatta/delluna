export const name="arrow_outward-fill";
export const id="dl_09ac6baf2f04c3b734ec";
export const url=new URL("../icons/arrow_outward-fill.svg?v=c35d1beada08cafa675651e47707ea7b4af3a89ea38f0345cb429cdcd9064d7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
