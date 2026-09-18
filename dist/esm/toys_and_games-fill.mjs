export const name="toys_and_games-fill";
export const id="dl_56478fb28b0440d2b9d0";
export const url=new URL("../icons/T/toys_and_games-fill.svg?v=70fb7a8d10627575c0c46e53e9b2b33ac175cadf48e1344d3b775ec2ca25152b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
