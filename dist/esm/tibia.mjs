export const name="tibia";
export const id="dl_a516891f8dbee8201b82";
export const url=new URL("../icons/tibia.svg?v=58ce37c42fcf22ba14d3b64dcf764dbbbc6cd5fdc9b80cc257c60a0836ebd8dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
