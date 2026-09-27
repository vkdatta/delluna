export const name="solar-panel";
export const id="dl_7faf3e872ff28082032d";
export const url=new URL("../icons/solar-panel.svg?v=4d16bd65e75c875754d41ad4d5be7ca69afa8dea8aa4a18387a1f15a15ff05ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
