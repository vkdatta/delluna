export const name="how_to_vote";
export const id="dl_5bb6a269ed044de30df9";
export const url=new URL("../icons/how_to_vote.svg?v=9a52f0081788194652c14f4a4bf9f9546f040d8c1c7b4800cd5662cef8d601d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
