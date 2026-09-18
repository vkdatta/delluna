export const name="right_panel_close";
export const id="dl_53c1cb8e987c4249aaac";
export const url=new URL("../icons/R/right_panel_close.svg?v=8811569177f7d51b9e08f7b78e0354c36fecd0f40b4d9072b18b36496755d99b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
