export const name="left_panel_open";
export const id="dl_b75d1c75bb7f41b0bc6a";
export const url=new URL("../icons/left_panel_open.svg?v=fd989e2bbe9666013aa00ad8ff0c6635d60b6d55e14f578c3ecf7888aa801fd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
