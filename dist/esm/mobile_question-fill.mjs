export const name="mobile_question-fill";
export const id="dl_de87e08718773781204a";
export const url=new URL("../icons/mobile_question-fill.svg?v=9455b9c58a889aedc2768f4c1ebcd8334f7894041260fcfbaf8a261810815fe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
