export const name="right_panel_open";
export const id="dl_5b06826c4b164333c307";
export const url=new URL("../icons/right_panel_open.svg?v=daec978aebc0bbc0958efea6f13ee2b0d49f09f9b8f88edbec935a54d3ec8eb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
