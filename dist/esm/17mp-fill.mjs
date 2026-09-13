export const name="17mp-fill";
export const id="dl_cb2c0fb4a2904d20817c";
export const url=new URL("../icons/1/17mp-fill.svg?v=815dea18bf6639eff9bfecb79de8b17fed898eb9eec5329604eec110dc77df68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
