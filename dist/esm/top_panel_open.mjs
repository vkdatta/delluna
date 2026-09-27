export const name="top_panel_open";
export const id="dl_6355672cd96187d9b07b";
export const url=new URL("../icons/top_panel_open.svg?v=37d7e41a7d1aec7d5f002ea4400c53913a59f9ea71f8a8cae782af98b050b7be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
